/*jshint node:true */

var PORT = process.env.PORT || 3000;

var express = require('express');
var app = express();

// app.use(express.logger({ format: ':method :status :url' }));
// app.use(express.bodyParser());
// app.use(express.methodOverride());
// app.use(app.router);
app.use(express.static('client'));
// app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

app.listen(PORT);
console.log('Server running on ' + PORT);
