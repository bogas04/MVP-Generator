import utils from '../utils';

export default function users (Router , db) {
  return Router()
  .get('/users.json', (req, res) => {
    db.models.users.findAll({ where: req.query })
    .then(users => Promise.resolve(users.map(utils.sanitizeUserSync)))
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({ err }));
  })
  .get('/profile.json/:username', (req, res) => {
    const { username } = req.params;
    db.models.users.findOne({ where: { username } })
    .then(utils.sanitizeUser)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({ err }));
  })
  .get('/user.json', utils.middlewares.auth(db), (req, res) => {
    if (req.isAuthenticated) {
      const { username } = req.user;
      res.status(200).json(req.user);
    } else {
      res.status(403).json({ message: 'Token invalid. Login first' });
    }
  })
  /* ACCOUNT CREATION */
  .post('/signup.json', (req, res) => {
    const { username, firstName, lastName, email, password, confirmPassword } = req.body;

    if (password.length < 8) {
      res.status(500).json({ message: 'Password should be at least 8 characters long' });
    }
    if (password !== confirmPassword) {
      res.status(500).json({ message: `Passwords don't match` });
    }

    db.models.users.create({ username, firstName, lastName, email, password: utils.hashPassword(password), })
    .then(utils.sanitizeUser)
    .then(data => res.status(200).json({ message: 'All cool', data }))
    .catch(err => res.status(500).json({ message: 'Error', err }));
  })
  /* ACCOUNT LOGIN */
  .post('/login.json', (req, res) => {
    const { email, password } = req.body;

    db.models.users.findOne({ where: { email } })
    .then(utils.getUserOrThrowError)
    .then(utils.comparePasswordAndReturnUser(password))
    .then(utils.sanitizeUser)
    .then(utils.addToken)
    .then(data => res.status(200).json(data))
    .catch(({ message }) => res.status(403).json({ message }));
  })
}
