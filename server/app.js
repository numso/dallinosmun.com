var koa = require('koa');
var serve = require('koa-static');

var PORT = process.env.PORT || 3000;

var app = koa();
app.use(serve('client'));

app.listen(PORT);
console.log('Server running on ' + PORT);
