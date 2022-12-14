const router = require('express').Router();
const routerAdmin = require('./admin');

router.use('/api', routerAdmin);

module.exports = router;
