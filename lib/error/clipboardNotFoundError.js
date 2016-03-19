'use strict';

var ClipboardNotFoundError = function ClipboardNotFoundError(message) {
  Error.call(this);
  this.name = 'ClipboardNotFoundError';
  this.message = message;
  this.userMessage = 'Wybrany element nie istnieje';
};

module.exports.ClipboardNotFoundError = ClipboardNotFoundError;

ClipboardNotFoundError.prototype = Object.create(Error.prototype);
ClipboardNotFoundError.prototype.constructor = ClipboardNotFoundError;