var express = require('express');
var path = require('path');
var app = express();

var router = require('./routes/index');

app.set('port', (process.env.PORT || 5000));

// Set static directory as public
app.use('/public', express.static(__dirname + '/public'));
app.use('/app', express.static(__dirname + '/app'));
app.use('/views', express.static(__dirname + '/app/views'));

// Set views folder as folder for templates
app.set('views', './app');

// Set html engine using ejs
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Use router for request rewrite
app.use('/', router);

// for 404 requests
app.use(function (req, res, next) {
   res.status('404');

   if (req.accepts('html')) {
      res.render('404', { title: '404 : Not Found' });
   }
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

module.exports = app;
