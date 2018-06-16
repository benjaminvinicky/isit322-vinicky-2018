var express = require('express');
var router = express.Router();

const requester = require('request');

router.get('/you-rang', function(request, response) {
    requester('http://localhost:30027/you-rang').pipe(response);
});

router.get('/foo', function(request, response) {
    var message = { status: 'success', result: 'bar', file: 'api.js' };
    console.log('Foo called:\n' + JSON.stringify(message, null, 4));
    response.send(message);
});



router.get('/git-user', function(request, response) {
    requester('http://localhost:30028/git-user').pipe(response);
});

router.get('/get-gists', function(request, response) {
    requester('http://localhost:30029/gists/get-basic-list').pipe(response);
});

module.exports = router;
