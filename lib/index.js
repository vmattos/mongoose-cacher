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

  var cache = function() {
    this._cached = true;
    return this;
  };

  mongoose.Query.prototype.cache = cache;

  /**
   * Custom exec middleware
   */
  var exec = function(caller, args) {
    if(!this._cached) {
      return query[caller].apply(this, args);
    }

    console.log('CACHE!');

    return this;
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