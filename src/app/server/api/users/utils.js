import config from '../../../config';
import { hashSync, compareSync as comparePassword} from 'bcrypt';
import jwt from 'jsonwebtoken';

// Password hashing
export const hashPassword = (plainText) => hashSync(plainText, config.PASSWORD_HASH_ROUNDS);
export const comparePasswordAndReturnUser = password => user => (
  comparePassword(password, user.password) ? Promise.resolve(user) : Promise.reject({ message: 'Incorrect password' })
);

// User Object Transformations 
export const getUserOrThrowError = user => user === null ? Promise.reject({ message: 'User not found' }) : Promise.resolve(user);
export const sanitizeUserSync = ({ id, username, firstName, lastName, createdAt, reviews = []}) => (
  { id, username, firstName, lastName, createdAt, reviews }
);
export const sanitizeUser = (user) => Promise.resolve(sanitizeUserSync(user));

// JWT
export const encodeWith = ({ id, username, createdAt }) => ({ id, username, createdAt });
export const getToken = user => jwt.sign(encodeWith(user), config.JWT_SECRET,  { expiresIn: config.JWT_EXPIRES_IN });
export const addToken = user => Promise.resolve({ user, token: getToken(user) });
export const authMiddleware = db => (req, res, next) => {
  const { headers: { token } } = req;
  jwt.verify(token, config.JWT_SECRET, (err, data) => {
    if (err) { 
      req.isAuthenticated = false;
      next();
    } else {
      const { username } = data;
      db.models.users.findOne({ where: { username } })
      .then(getUserOrThrowError)
      .then(sanitizeUser)
      .then(user => {
        req.isAuthenticated = true;
        req.user = user;
        next();
      })
      .catch(_ => {
        req.isAuthenticated = false;
        next();
      })
    }
  });
};

export default {
  hashPassword,
  comparePassword,
  comparePasswordAndReturnUser,
  sanitizeUserSync,
  sanitizeUser,
  getUserOrThrowError,
  getToken,
  addToken,
  encodeWith,
  authMiddleware,
};
