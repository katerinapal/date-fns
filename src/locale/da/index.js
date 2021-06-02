"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("./build_format_locale/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("./build_distance_in_words_locale/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buildDistanceInWordsLocale = _index4.default;
var buildFormatLocale = _index2.default;

/**
 * @category Locales
 * @summary Danish locale.
 * @author Anders B. Hansen [@Andersbiha]{@link https://github.com/Andersbiha}
 * @author [@kgram]{@link https://github.com/kgram}
 */
mod_indexjs = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
};
var mod_indexjs;
exports.default = mod_indexjs;
module.exports = exports.default;