var express = require('express');
var router = express.Router();
var request = require('request');

/* Set up a route called foo. */
router.get('/foo', function(request, response) {
    var message = { 'status': 'success', 'result': 'bar', 'file': 'api.js' };
    console.log('Foo called:\n' + JSON.stringify(message, null, 4));
    response.send(message);
});

router.get('/bar', function(request, response) {
    var message = { 'youRang': 'Hello' };
    console.log('Foo called:\n' + JSON.stringify(message, null, 4));
    response.send(message);
});

router.get('/user', function(req, res, next) {
    const options = {
        url: 'https://api.github.com/users/benjaminvinicky',
        headers: {
            'User-Agent': 'request'
        }
    };

    request(options, function(error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        const jsonBody = JSON.parse(body);
        console.log('body:', JSON.stringify(body, null, 4));
        res.send({error: error, response: response, body: jsonBody});
    });

});

module.exports = router;