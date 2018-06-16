var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.sendFile('../public/index.html');
});

module.exports = router;
