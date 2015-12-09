var express = require('express');
var path = require('path');
var app = express();

var router = require('./routes/index');

app.set('port', (process.env.PORT || 5000));

// Set static directory as public
app.use('/static', express.static(__dirname + '/public'));
app.use('/modules', express.static(__dirname + '/app/scripts'));
app.use('/views', express.static(__dirname + '/app/views'));

// Set views folder as folder for templates
app.set('views', './app');

// Set html engine using ejs
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Use router for request rewrite
app.use('/', router);

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});