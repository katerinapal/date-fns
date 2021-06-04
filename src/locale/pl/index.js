"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.indexjs = undefined;

var _index = require("./build_distance_in_words_locale/index.js");

var _index2 = require("./build_format_locale/index.js");

/**
 * @category Locales
 * @summary Polish locale.
 * @author Mateusz Derks [@ertrzyiks]{@link https://github.com/ertrzyiks}
 * @author Just RAG [@justrag]{@link https://github.com/justrag}
 */
exports.indexjs = mod_indexjs = {
  distanceInWords: (0, _index.buildDistanceInWordsLocale)(),
  format: (0, _index2.buildFormatLocale)()
};
var mod_indexjs;
exports.indexjs = mod_indexjs;