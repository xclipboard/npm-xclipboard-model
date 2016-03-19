var chai = require('chai');
var should = chai.should();
var pictogramsCollectionResponse = require('../../../lib/model/response/pictogramsCollectionResponse');

describe('pictogramsCollectionResponse model test', function () {

  var total = 'total';
  var pictograms = 'pictograms';

  it('should create model', function (done) {

    var pictogramsCollectionResponseModel = new pictogramsCollectionResponse.PictogramsCollectionResponse(
      total,
      pictograms
    );

    should.exist(pictogramsCollectionResponseModel);
    pictogramsCollectionResponseModel.total.should.be.equal(total);
    pictogramsCollectionResponseModel.pictograms.should.be.equal(pictograms);
    done();
  });

  it('should create model by builder', function (done) {

    var pictogramsCollectionResponseModel = new pictogramsCollectionResponse.PictogramsCollectionResponseBuilder()
      .withTotal(total)
      .withPictograms(pictograms)
      .build();

    should.exist(pictogramsCollectionResponseModel);
    pictogramsCollectionResponseModel.total.should.be.equal(total);
    pictogramsCollectionResponseModel.pictograms.should.be.equal(pictograms);
    done();
  });

});
