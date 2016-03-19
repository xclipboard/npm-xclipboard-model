'use strict';

var ClipboardPictogramAlreadyExistsError = function ClipboardPictogramAlreadyExistsError(message) {
  Error.call(this);
  this.name = 'ClipboardPictogramAlreadyExistsError';
  this.message = message;
  this.userMessage = 'Wybrany pictogram został już użyty';
};

module.exports.ClipboardPictogramAlreadyExistsError = ClipboardPictogramAlreadyExistsError;

ClipboardPictogramAlreadyExistsError.prototype = Object.create(Error.prototype);
ClipboardPictogramAlreadyExistsError.prototype.constructor = ClipboardPictogramAlreadyExistsError;