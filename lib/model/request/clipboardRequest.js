'use strict';

var ClipboardRequest = function ClipboardRequest(text, pictogram) {
  this.text = text;
  this.pictogram = pictogram;
};

var ClipboardRequestBuilder = function ClipboardRequestBuilder() {
  this.text = null;
  this.pictogram = null;

  var self = this;

  this.withText = function withText(text) {
    self.text = text;
    return self;
  };

  this.withPictogram = function withPictogram(pictogram) {
    self.pictogram = pictogram;
    return self;
  };

  this.build = function build() {
    return new ClipboardRequest(
      self.text,
      self.pictogram
    );
  };

};

module.exports = {
  ClipboardRequest: ClipboardRequest,
  ClipboardRequestBuilder: ClipboardRequestBuilder
};
