var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next) { 'use strict';
    res.send('git-User called and responded!');
});

router.get('/git-user', function(req, res, next) {
    const options = {
        url: 'https://api.github.com/users/benjaminvinicky',
        headers: {
            'User-Agent': 'request'
        }
    };
    request(options, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        const jsonBody = JSON.parse(body);
        console.log('body:', JSON.stringify(body, null, 4));
        res.send({error: error, response: response, body: jsonBody});
    });
});

router.get('/you-rang', function(request, response) {
    let callerResponse = { 'result': 'success', 'message': 'I am up and running' };
    response.send(callerResponse);
});

module.exports = router;
