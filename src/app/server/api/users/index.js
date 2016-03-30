import utils from './utils';

export default function users (Router , db) {
  let app = Router();

  app.get('/users.json', (req, res) => {
    db.models.users.findAll({ where: req.query || {} }).then(utils.sanitizeUser)
    .then(data => res.status(200).json({ data }))
    .catch(err => res.status(500).json({ err }));
  });

  app.post('/signup.json', (req, res) => {
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

  });
  app.post('/login.json', (req, res) => {
    const { email, password } = req.body;

    db.models.users.findOne({ where: { email } })
    .then(utils.getUserOrThrowError)
    .then(utils.comparePasswordAndReturnUser(password))
    .then(utils.sanitizeUser)
    .then(utils.addToken)
    .then(data => res.status(200).json(data))
    .catch(({ message }) => res.status(403).json({ message }));
  });

  // Protected Routes
  app.get('/user.json', utils.authMiddleware(db), (req, res) => {
    if (req.isAuthenticated) {
      const { username } = req.user;
      res.status(200).json(req.user);
    } else {
      res.status(403).json({ message: 'Token invalid. Login first' });
    }
  });

  return app;
}
