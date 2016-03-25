import bcrypt from 'bcrypt';

const hashPassword = plainPassword => bcrypt.hashSync(plainPassword, 10);
const comparePassword = (plainPassword, hashedPassword) => bcrypt.compareSync(plainPassword, hashedPassword);
const sanitizeUser = ({ id, username, firstName, lastName, createdAt }) => (
  { id, username, firstName, lastName, createdAt }
);

export default function users (Router , db) {
  let app = Router();

  app.get('/users.json', (req, res) => {
    db.models.users.findAll({ where: req.query || {} })
    .then(data => Promise.resolve(data.map(sanitizeUser)))
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

    db.models.users.create({ username, firstName, lastName, email, password: hashPassword(password), })
    .then(data => res.status(200).json({ message: 'All cool', data }))
    .catch(err => res.status(500).json({ message: 'Error', err }));

  });

  app.post('/login.json', (req, res) => {
    const { email, password } = req.body;

    // TODO: Validation checks
    db.models.users.find({ where: { email } })
    .then(user => user === null ? Promise.reject({ message: 'User not found' }) : Promise.resolve(user))
    .then(user => (
      comparePassword(password, user.password) ? Promise.resolve(user) : Promise.reject({ message: 'Incorrect password' })
    ))
    .then(data => {
      // TODO: session work / jwb if required
      res.status(200).json({ data: sanitizeUser(data) })
    })
    .catch(({ message }) => res.status(403).json({ message }))
  });

  return app;
}
