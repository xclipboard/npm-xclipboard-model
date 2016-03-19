var chai = require('chai');
var should = chai.should();
var searchClipboardsRequest = require('../../lib/model/searchClipboardsRequest');

describe('searchClipboardsRequest model test', function () {

  var pictogram = 'pictogram';

  it('should create model', function (done) {

    var model = new searchClipboardsRequest.SearchClipboardsRequest(
      pictogram
    );

    should.exist(model);
    model.pictogram.should.be.equal(pictogram);

    done();
  });

  it('should create model by builder', function (done) {

    var model = new searchClipboardsRequest.SearchClipboardsRequestBuilder()
      .withPictogram(pictogram)
      .build();

    should.exist(model);
    model.pictogram.should.be.equal(pictogram);

    done();
  });

});