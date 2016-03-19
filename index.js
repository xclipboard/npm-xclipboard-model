'use strict';

var meta = require('./lib/meta');

module.exports = {

  error: {
    ClipboardNotFoundError: require('./lib/error/clipboardNotFoundError').ClipboardNotFoundError,
    ServiceUnavailableError: require('./lib/error/serviceUnavailableError').ServiceUnavailableError
  },
  model: {

    searchClipboardsRequest: require('./lib/model/searchClipboardsRequest'),

    clipboardRequest: require('./lib/model/request/clipboardRequest'),

    clipboardsCollectionResponse: require('./lib/model/response/clipboardsCollectionResponse'),

    clipboardResponse: require('./lib/model/response/clipboardResponse'),

    pictogramsCollectionResponse: require('./lib/model/response/pictogramsCollectionResponse'),

    pictogramResponse: require('./lib/model/response/pictogramResponse')
  },

  /**
   * the version of the library
   * @property VERSION
   * @type String
   * @static
   */
  VERSION: meta.VERSION
};


