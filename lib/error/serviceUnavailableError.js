'use strict';

var ServiceUnavailableError = function ServiceUnavailableError(message) {
  Error.call(this);
  this.name = 'ServiceUnavailableError';
  this.message = message;
  this.userMessage = 'Usługa nie jest obecnie dostępna - spróbuj ponownie za chwilę';
};

module.exports.ServiceUnavailableError = ServiceUnavailableError;

ServiceUnavailableError.prototype = Object.create(Error.prototype);
ServiceUnavailableError.prototype.constructor = ServiceUnavailableError;