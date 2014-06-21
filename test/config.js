'use strict';

var path = require('path');

var config = module.exports = {};

config.testDirectory = path.join(__dirname, 'tmp');
config.appPath = path.join(__dirname, '..', 'app');
