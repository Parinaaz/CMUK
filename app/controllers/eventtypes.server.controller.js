'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  errorHandler = require('./errors.server.controller'),
  Category = mongoose.model('Eventtype'),
    _ = require('lodash');

var crud = require('./crud.server.controller')('Eventtype', 'type');

module.exports = crud;