var express = require('express');
var router = express.Router();

router.get('/users', require('./users'));

module.exports = router;
