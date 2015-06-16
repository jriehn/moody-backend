/*global, require */
/*jshint globalstrict:true*/
'use strict';

var https = require('https');
var fs = require('fs');

var Router = require('node-simple-router');

var router = Router({list_dir: false});

var sockets = require('./sockets');
router.get('/sockets', sockets.getString);

var options = {
    key: fs.readFileSync('app/certs/server.key'),
    cert: fs.readFileSync('app/certs/server.crt')
};

https.createServer(options, router).listen(1234);
