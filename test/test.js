var should = require('should')
  , mongoose = require('mongoose');
  , mongooseCacher = require('../index.js');

describe('mongoose Query object', function() {
  mongooseCacher(mongoose);
});
