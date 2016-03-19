'use strict';

var PictogramResponse = function PictogramResponse(id, category, url) {
  this.id = id;
  this.category = category;
  this.url = url;
};

var PictogramResponseBuilder = function PictogramResponseBuilder() {
  this.id = null;
  this.category = null;
  this.url = null;

  var self = this;

  this.withId = function withId(id) {
    self.id = id;
    return self;
  };

  this.withCategory = function withCategory(category) {
    self.category = category;
    return self;
  };

  this.withUrl = function withUrl(url) {
    self.url = url;
    return self;
  };

  this.build = function build() {
    return new PictogramResponse(
      self.id,
      self.category,
      self.url
    );
  };

};

module.exports = {
  PictogramResponse: PictogramResponse,
  PictogramResponseBuilder: PictogramResponseBuilder
};
