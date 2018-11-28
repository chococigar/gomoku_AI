const express = require('express')

var app = express();
var PORT = 80;
//app.use('/', express.static(__dirname + '/public'));
app.use('/', express.static(__dirname));
app.listen(PORT, function() {
    console.log('listening at port ', PORT)
    });
