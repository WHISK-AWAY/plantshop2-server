const router = require('express').Router();
const { User } = require('../../DB/index.js');
const { requireToken } = require('../authMiddleware.js');

/**
 * INBOUND ROUTE: /api/auth
 */

router.get('/', requireToken, (req, res, next) => {
  try {
    res.send(req.user);
  } catch (ex) {
    next(ex);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await User.authenticate({
      email: email.trim().toLowerCase(),
      password: password.trim(),
    });
    if (token) return res.status(200).send({ token });
    else {
      err = new Error();
      err.status = 401;
      throw err;
    }
  } catch (err) {
    if (err.status === 401) return res.status(401).send('Bad credentials');
    next(err);
  }
});

module.exports = router;
