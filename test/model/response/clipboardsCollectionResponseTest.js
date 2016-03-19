var chai = require('chai');
var should = chai.should();
var clipboardsCollectionResponse = require('../../../lib/model/response/clipboardsCollectionResponse');

describe('clipboardsCollectionResponse model test', function () {

  var total = 'total';
  var clipboards = 'clipboards';

  it('should create model', function (done) {

    var clipboardsCollectionResponseModel = new clipboardsCollectionResponse.ClipboardsCollectionResponse(
      total,
      clipboards
    );

    should.exist(clipboardsCollectionResponseModel);
    clipboardsCollectionResponseModel.total.should.be.equal(total);
    clipboardsCollectionResponseModel.clipboards.should.be.equal(clipboards);
    done();
  });

  it('should create model by builder', function (done) {

    var clipboardsCollectionResponseModel = new clipboardsCollectionResponse.ClipboardsCollectionResponseBuilder()
      .withTotal(total)
      .withClipboards(clipboards)
      .build();

    should.exist(clipboardsCollectionResponseModel);
    clipboardsCollectionResponseModel.total.should.be.equal(total);
    clipboardsCollectionResponseModel.clipboards.should.be.equal(clipboards);
    done();
  });

});
