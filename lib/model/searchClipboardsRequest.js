'use strict';

var SearchClipboardsRequest = function SearchClipboardsRequest(pictogram) {
  this.pictogram = pictogram;
};

var SearchClipboardsRequestBuilder = function SearchClipboardsRequestBuilder() {
  this.pictogram = null;
  var self = this;

  this.withPictogram = function (pictogram) {
    self.pictogram = pictogram;
    return self;
  };

  this.build = function () {
    return new SearchClipboardsRequest(
      self.pictogram
    );
  };
};

module.exports = {
  SearchClipboardsRequest: SearchClipboardsRequest,
  SearchClipboardsRequestBuilder: SearchClipboardsRequestBuilder
};