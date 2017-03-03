'use strict';

var koa = require('koa'),
	app = new koa();

var config = require('./config.js');

var port = config.port;

app.use( function *(){
	this.body = 'Hello Koa : ' + config.port;
});

app.listen( port );