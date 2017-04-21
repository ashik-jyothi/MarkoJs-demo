require('marko/express');
require('marko/node-require');

var express = require('express');
var about = require('./routes/components/about/about.marko');
var contact = require('./routes/components/contact/contacts.marko');
require('lasso').configure({
    plugins: [
        'lasso-marko'
    ],
    outputDir: __dirname + '/static'
});


var app = express();

var port = 3000;

app.use(require('lasso/middleware').serveStatic());
app.use(express.static('public'))

app.get('/', require('./routes/index'));
app.get('/About', function(req, res) {
    res.marko(about, {
            name: 'Frank',
            count: 30,
            colors: ['red', 'green', 'blue']
        });
        // return indexTemplate.stream({
        //   name: 'Frank',
        //   count: 30,
        //   colors: ['red', 'green', 'blue']
        // })
});

app.get('/Contact', function(req, res) {
    res.marko(about, {
            name: 'Frank',
            count: 30,
            colors: ['red', 'green', 'blue']
        });
});

app.listen(port, function(err) {
    if (err) {
        throw err;
    }
    console.log('Listening on port %d', port);
});
