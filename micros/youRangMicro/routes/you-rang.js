var express = require('express');
var router = express.Router();

router.get('/', function(request, response) {
    var message = { 'youRang': 'Hello' };
    console.log('Foo called:\n' + JSON.stringify(message, null, 4));
    response.send(message);
});

module.exports = router;