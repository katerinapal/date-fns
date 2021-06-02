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
  var months3char = ['led', 'úno', 'bře', 'dub', 'kvě', 'čvn', 'čvc', 'srp', 'zář', 'říj', 'lis', 'pro'];
  var monthsFull = ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'];
  var weekdays2char = ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so'];
  var weekdays3char = ['ned', 'pon', 'úte', 'stř', 'čtv', 'pát', 'sob'];
  var weekdaysFull = ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'];
  var meridiemUppercase = ['DOP.', 'ODP.'];
  var meridiemLowercase = ['dop.', 'odp.'];
  var meridiemFull = ['dopoledne', 'odpoledne'];

  var formatters = {
    // Month: led, úno, ..., pro
    'MMM': function MMM(date) {
      return months3char[date.getMonth()];
    },

    // Month: leden, únor, ..., prosinec
    'MMMM': function MMMM(date) {
      return monthsFull[date.getMonth()];
    },

    // Day of week: ne, po, ..., so
    'dd': function dd(date) {
      return weekdays2char[date.getDay()];
    },

    // Day of week: ned, pon, ..., sob
    'ddd': function ddd(date) {
      return weekdays3char[date.getDay()];
    },

    // Day of week: neděle, pondělí, ..., sobota
    'dddd': function dddd(date) {
      return weekdaysFull[date.getDay()];
    },

    // DOP., ODP.
    'A': function A(date) {
      return date.getHours() / 12 >= 1 ? meridiemUppercase[1] : meridiemUppercase[0];
    },

    // dop., odp.
    'a': function a(date) {
      return date.getHours() / 12 >= 1 ? meridiemLowercase[1] : meridiemLowercase[0];
    },

    // dopoledne, odpoledne
    'aa': function aa(date) {
      return date.getHours() / 12 >= 1 ? meridiemFull[1] : meridiemFull[0];
    }

    // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  };var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W'];
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date));
    };
  });

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  };
}

function ordinal(number) {
  return number + '.';
}

exports.default = mod_buildFormatLocale;
module.exports = exports.default;