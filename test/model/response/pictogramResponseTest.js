var chai = require('chai');
var should = chai.should();
var pictogramResponse = require('../../../lib/model/response/pictogramResponse');

describe('pictogramResponse model test', function () {

  var id = 'id';
  var category = 'category';
  var url = 'url';

  it('should create model', function (done) {

    var pictogramResponseModel = new pictogramResponse.PictogramResponse(
      id, 
      category, 
      url
    );

    should.exist(pictogramResponseModel);
    pictogramResponseModel.id.should.be.equal(id);
    pictogramResponseModel.category.should.be.equal(category);
    pictogramResponseModel.url.should.be.equal(url);
    done();
  });

  it('should create model by builder', function (done) {

    var pictogramResponseModel = new pictogramResponse.PictogramResponseBuilder()
      .withId(id)
      .withCategory(category)
      .withUrl(url)
      .build();

    should.exist(pictogramResponseModel);
    pictogramResponseModel.id.should.be.equal(id);
    pictogramResponseModel.category.should.be.equal(category);
    pictogramResponseModel.url.should.be.equal(url);
    done();
  });

});
