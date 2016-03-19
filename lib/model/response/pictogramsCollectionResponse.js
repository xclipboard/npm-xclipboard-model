'use strict';

var PictogramsCollectionResponse = function PictogramsCollectionResponse(total, pictograms) {
  this.total = total;
  this.pictograms = pictograms;
};

var PictogramsCollectionResponseBuilder = function PictogramsCollectionResponseBuilder() {
  this.total = null;
  this.pictograms = null;

  var self = this;

  this.withTotal = function withTotal(total) {
    self.total = total;
    return self;
  };

  this.withPictograms = function withPictograms(pictograms) {
    self.pictograms = pictograms;
    return self;
  };


  this.build = function build() {
    return new PictogramsCollectionResponse(
      self.total,
      self.pictograms
    );
  };

};

module.exports = {
  PictogramsCollectionResponse: PictogramsCollectionResponse,
  PictogramsCollectionResponseBuilder: PictogramsCollectionResponseBuilder
};
