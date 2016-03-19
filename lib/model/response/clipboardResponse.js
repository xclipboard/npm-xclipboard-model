'use strict';

var ClipboardResponse = function ClipboardResponse(id, text, pictogram, createdAt) {
  this.id = id;
  this.text = text;
  this.pictogram = pictogram;
  this.createdAt = createdAt;
};

var ClipboardResponseBuilder = function ClipboardResponseBuilder() {
  this.id = null;
  this.text = null;
  this.pictogram = null;
  this.createdAt = null;

  var self = this;

  this.withId = function withId(id) {
    self.id = id;
    return self;
  };

  this.withText = function withText(text) {
    self.text = text;
    return self;
  };

  this.withPictogram = function withPictogram(pictogram) {
    self.pictogram = pictogram;
    return self;
  };

  this.withCreatedAt = function withCreatedAt(createdAt) {
    self.createdAt = createdAt;
    return self;
  };

  this.build = function build() {
    return new ClipboardResponse(
      self.id,
      self.text,
      self.pictogram,
      self.createdAt
    );
  };

};

module.exports = {
  ClipboardResponse: ClipboardResponse,
  ClipboardResponseBuilder: ClipboardResponseBuilder
};
