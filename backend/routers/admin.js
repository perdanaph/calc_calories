const router = require('express').Router();
const { registerAdmin } = require('./../controllers/adminController');

router.post('/admin/register', registerAdmin);

module.exports = router;
