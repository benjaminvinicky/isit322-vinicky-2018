var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'Micro1' });
});

router.get('/you-rang', function(request, response) {
response.send({ result: 'Hello!'})
});

module.exports = router;
