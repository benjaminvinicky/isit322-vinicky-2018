var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'Micro1' });
});

router.get('/bar', function(req,res) {
    res.send('Bar called from qux!');
});

router.get('/foo', function(req, res) {
   res.send('Foo called from qux!');
});

router.get('/you-rang', function(request, response) {
    let callerResponse = { 'result': 'success', 'message': 'I am up and running' };
    response.send(callerResponse);
});

module.exports = router;
