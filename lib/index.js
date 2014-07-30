'use strict';

/**
 * Module dependencies.
 */


var mongooseCacher = function(mongoose) {

  /**
   * References to original mongoose.Query.prototype functions
   */
  var query = {
    exec: mongoose.Query.prototype.exec,
    execFind: mongoose.Query.prototype.execFind
  };

  var exec = function(caller, args) {
    return query[caller].apply(this, args);
  };

  /**
   * Setting mongoose.Query.prototype functions to use our cacher
   */
  mongoose.Query.prototype.exec = function(arg1, arg2) {
    return exec.call(this, 'exec', arguments);
  };

  mongoose.Query.prototype.execFind = function(arg1, arg2) {
    return exec.call(this, 'execFind', arguments);
  };
};

/**
 * Export `mongooseCacher`.
 */
module.exports = mongooseCacher;