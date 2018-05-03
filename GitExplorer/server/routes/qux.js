var express = require('express');
var router = express.Router();

router.get('/', function(request, response) {
    var message = 'I am up and running';
    var result = 'success';
    console.log('Foo called:\n' + JSON.stringify(message, null, 4));
    response.send(message, result);
});

module.exports = router;