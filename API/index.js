const router = require('express').Router();

router.use('/products', require('./routes/products.js'));
router.use('/users', require('./routes/users.js'));
router.use('/auth', require('./routes/auth.js'));
router.use('/orders', require('./routes/orders.js'));
router.use('/currency', require('./routes/currency.js'));
router.use('/promos', require('./routes/promos.js'));

router.use((req, res, next) => {
  const err = new Error('API ROUTE NOT FOUND!');
  err.status = 404;
  next(err);
});

module.exports = router;
