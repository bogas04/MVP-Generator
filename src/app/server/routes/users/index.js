export default function users (Router , db) {
  let app = Router();

  app.post('/signup.json', (req, res) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body;
    // TODO: Validation checks
  });

  app.post('/login.json', (req, res) => {
    const { email, password } = req.body;
    const verifyPassword = (password, hashedPassword) => Promise.resolve(true);

    // TODO: Validation checks
    db.models.users.find({ where: { email } })
    .then(({ password: hashedPassword }) => verifyPassword(password, hashedPassword))
    .catch(err => res.status(403).json({ err, msg: 'User not found' }))
    .then(data => res.status(200).json({ data }))
    .catch(err => res.status(403).json({ err, msg: 'Incorrect password' }));
  });

  return app;
}
