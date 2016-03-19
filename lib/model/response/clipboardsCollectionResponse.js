'use strict';

var ClipboardsCollectionResponse = function ClipboardsCollectionResponse(total, clipboards) {
  this.total = total;
  this.clipboards = clipboards;
};

var ClipboardsCollectionResponseBuilder = function ClipboardsCollectionResponseBuilder() {
  this.total = null;
  this.clipboards = null;

  var self = this;

  this.withTotal = function withTotal(total) {
    self.total = total;
    return self;
  };

  this.withClipboards = function withClipboards(clipboards) {
    self.clipboards = clipboards;
    return self;
  };


  this.build = function build() {
    return new ClipboardsCollectionResponse(
     self.total, 
     self.clipboards
    );
  };

};

module.exports = {
  ClipboardsCollectionResponse: ClipboardsCollectionResponse,
  ClipboardsCollectionResponseBuilder: ClipboardsCollectionResponseBuilder
};
