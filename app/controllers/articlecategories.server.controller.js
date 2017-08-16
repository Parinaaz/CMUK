'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  errorHandler = require('./errors.server.controller'),
  Articlecategory = mongoose.model('Articlecategory'),
    _ = require('lodash');

var crud = require('./crud.server.controller')('Articlecategory', 'name');

module.exports = crud;