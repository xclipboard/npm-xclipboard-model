var chai = require('chai');
var should = chai.should();
var clipboardRequest = require('../../../lib/model/request/clipboardRequest');

describe('clipboardRequest model test', function () {

  var text = 'text';
  var pictogram = 'pictogram';

  it('should create model', function (done) {

    var clipboardRequestModel = new clipboardRequest.ClipboardRequest(
      text,
      pictogram
    );

    should.exist(clipboardRequestModel);
    clipboardRequestModel.text.should.be.equal(text);
    clipboardRequestModel.pictogram.should.be.equal(pictogram);
    done();
  });

  it('should create model by builder', function (done) {

    var clipboardRequestModel = new clipboardRequest.ClipboardRequestBuilder()
      .withText(text)
      .withPictogram(pictogram)
      .build();

    should.exist(clipboardRequestModel);
    clipboardRequestModel.text.should.be.equal(text);
    clipboardRequestModel.pictogram.should.be.equal(pictogram);
    done();
  });

});
