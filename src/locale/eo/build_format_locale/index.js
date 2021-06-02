'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../../_lib/build_formatting_tokens_reg_exp/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var mod_buildFormatLocale = buildFormatLocale;

var buildFormattingTokensRegExp = _index2.default;

function buildFormatLocale() {
  var months3char = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aŭg', 'sep', 'okt', 'nov', 'dec'];
  var monthsFull = ['januaro', 'februaro', 'marto', 'aprilo', 'majo', 'junio', 'julio', 'aŭgusto', 'septembro', 'oktobro', 'novembro', 'decembro'];
  var weekdays2char = ['di', 'lu', 'ma', 'me', 'ĵa', 've', 'sa'];
  var weekdays3char = ['dim', 'lun', 'mar', 'mer', 'ĵaŭ', 'ven', 'sab'];
  var weekdaysFull = ['dimanĉo', 'lundo', 'mardo', 'merkredo', 'ĵaŭdo', 'vendredo', 'sabato'];
  var meridiemUppercase = ['A.T.M.', 'P.T.M.'];
  var meridiemLowercase = ['a.t.m.', 'p.t.m.'];
  var meridiemFull = ['antaŭtagmeze', 'posttagmeze'];

  var formatters = {
    // Month: jan, feb, ..., deс
    'MMM': function MMM(date) {
      return months3char[date.getMonth()];
    },

    // Month: januaro, februaro, ..., decembro
    'MMMM': function MMMM(date) {
      return monthsFull[date.getMonth()];
    },

    // Day of week: di, lu, ..., sa
    'dd': function dd(date) {
      return weekdays2char[date.getDay()];
    },

    // Day of week: dim, lun, ..., sab
    'ddd': function ddd(date) {
      return weekdays3char[date.getDay()];
    },

    // Day of week: dimanĉo, lundo, ..., sabato
    'dddd': function dddd(date) {
      return weekdaysFull[date.getDay()];
    },

    // A.T.M., P.T.M.
    'A': function A(date) {
      return date.getHours() / 12 >= 1 ? meridiemUppercase[1] : meridiemUppercase[0];
    },

    // a.t.m., p.t.m.
    'a': function a(date) {
      return date.getHours() / 12 >= 1 ? meridiemLowercase[1] : meridiemLowercase[0];
    },

    // antaŭtagmeze, posttagmeze
    'aa': function aa(date) {
      return date.getHours() / 12 >= 1 ? meridiemFull[1] : meridiemFull[0];
    }

    // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  };var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W'];
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return formatters[formatterToken](date) + '-a';
    };
  });

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  };
}

exports.default = mod_buildFormatLocale;
module.exports = exports.default;