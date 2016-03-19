var chai = require('chai');
var should = chai.should();
var clipboardResponse = require('../../../lib/model/response/clipboardResponse');

describe('clipboardResponse model test', function () {

  var id = 'id';
  var text = 'text';
  var pictogram = 'pictogram';
  var createdAt = 'createdAt';

  it('should create model', function (done) {

    var clipboardResponseModel = new clipboardResponse.ClipboardResponse(
      id,
      text,
      pictogram,
      createdAt
    );

    should.exist(clipboardResponseModel);
    clipboardResponseModel.id.should.be.equal(id);
    clipboardResponseModel.text.should.be.equal(text);
    clipboardResponseModel.pictogram.should.be.equal(pictogram);
    clipboardResponseModel.createdAt.should.be.equal(createdAt);
    done();
  });

  it('should create model by builder', function (done) {

    var clipboardResponseModel = new clipboardResponse.ClipboardResponseBuilder()
      .withId(id)
      .withText(text)
      .withPictogram(pictogram)
      .withCreatedAt(createdAt)
      .build();

    should.exist(clipboardResponseModel);
    clipboardResponseModel.id.should.be.equal(id);
    clipboardResponseModel.text.should.be.equal(text);
    clipboardResponseModel.pictogram.should.be.equal(pictogram);
    clipboardResponseModel.createdAt.should.be.equal(createdAt);
    done();
  });

});
