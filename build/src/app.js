'use strict';

require('babel-polyfill');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _routes = require('../src/routes/routes');

var _routes2 = _interopRequireDefault(_routes);

require('dotenv/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

var app = (0, _express2.default)();
var port = process.env.port || 3000;

app.use(_express2.default.json());

app.use(_routes2.default);

app.listen(port);
console.log('App running on Localhost:' + port);