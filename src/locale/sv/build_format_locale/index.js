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
  var months3char = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
  var monthsFull = ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december'];
  var weekdays2char = ['sö', 'må', 'ti', 'on', 'to', 'fr', 'lö'];
  var weekdays3char = ['sön', 'mån', 'tis', 'ons', 'tor', 'fre', 'lör'];
  var weekdaysFull = ['söndag', 'måndag', 'tisdag', 'onsdag', 'torsdag', 'fredag', 'lördag'];
  var meridiemFull = ['f.m.', 'e.m.'];

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function MMM(date) {
      return months3char[date.getMonth()];
    },

    // Month: January, February, ..., December
    'MMMM': function MMMM(date) {
      return monthsFull[date.getMonth()];
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function dd(date) {
      return weekdays2char[date.getDay()];
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function ddd(date) {
      return weekdays3char[date.getDay()];
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function dddd(date) {
      return weekdaysFull[date.getDay()];
    },

    // a.m., p.m.
    'aa': function aa(date) {
      return date.getHours() / 12 >= 1 ? meridiemFull[1] : meridiemFull[0];
    }
  };

  formatters.A = formatters.aa;
  formatters.a = formatters.aa;

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W'];
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
  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
      case 2:
        return number + ':a';
    }
  }
  return number + ':e';
}

exports.default = mod_buildFormatLocale;
module.exports = exports.default;