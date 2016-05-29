import config from '../../config';
import { hashSync, compareSync as comparePassword} from 'bcrypt';
import jwt from 'jsonwebtoken';
import fs from 'fs-promise';
import multer from 'multer';
import mime from 'mime';
import md5 from 'md5';

export const middlewares = {
  upload() {
    const storage = multer.diskStorage({
      destination(req, file, cb) { return cb(null,  `${__dirname}/../../../tmp_upload`) },
      filename(req, f, cb) { return cb(null, `${f.fieldname}-${md5(f.originalname)}-${Date.now()}.${mime.extension(f.mimetype)}`); },
    });
    return multer({ storage });
  },
  auth(db) {
    return (req, res, next) => {
      const { headers: { token } } = req;
      jwt.verify(token, config.JWT_SECRET, (err, data) => {
        if (err) { 
          req.isAuthenticated = false;
          next();
        } else {
          const { username } = data;
          db.models.users.findOne({ where: { username } }).then(getUserOrThrowError).then(sanitizeUser).then(user => {
            req.isAuthenticated = true;
            req.user = user;
            next();
          }).catch(_ => {
            req.isAuthenticated = false;
            next();
          })
        }
      });
    }
  },
};

export const saveFilesAs = (files, to = `img`) => Promise.all(files.map(f => fs.rename(`${f.path}`, `${__dirname}/../../../web/${to}/${f.filename}`)));
export const deleteFilesAs = (files, from = `img`) => Promise.all(files.map(f => fs.unlink(`${__dirname}/../../../web/${to}/${f}`)));

// Password hashing
export const hashPassword = (plainText) => hashSync(plainText, config.PASSWORD_HASH_ROUNDS);
export const comparePasswordAndReturnUser = password => user => (
  comparePassword(password, user.password) ? Promise.resolve(user) : Promise.reject({ message: 'Incorrect password' })
);

// User Object Transformations 
export const getUserOrThrowError = user => user === null ? Promise.reject({ message: 'User not found' }) : Promise.resolve(user);
export const sanitizeUserSync = ({ id, photo, role, username, firstName, lastName, createdAt, reviews = []}) => (
  { id, photo, role, username, firstName, lastName, createdAt, reviews }
);
export const sanitizeUser = (user) => Promise.resolve(sanitizeUserSync(user));

// JWT
export const encodeWith = ({ id, username, createdAt }) => ({ id, username, createdAt });
export const getToken = user => jwt.sign(encodeWith(user), config.JWT_SECRET,  { expiresIn: config.JWT_EXPIRES_IN });
export const addToken = user => Promise.resolve({ user, token: getToken(user) });
export default {
  hashPassword, comparePassword, comparePasswordAndReturnUser,
  sanitizeUserSync, sanitizeUser, getUserOrThrowError,
  getToken, addToken, encodeWith,
  middlewares, saveFilesAs, deleteFilesAs,
};
