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
  var months3char = ['tammi', 'helmi', 'maalis', 'huhti', 'touko', 'kesä', 'heinä', 'elo', 'syys', 'loka', 'marras', 'joulu'];
  var monthsFull = ['tammikuu', 'helmikuu', 'maaliskuu', 'huhtikuu', 'toukokuu', 'kesäkuu', 'heinäkuu', 'elokuu', 'syyskuu', 'lokakuu', 'marraskuu', 'joulukuu'];
  var weekdays2char = ['su', 'ma', 'ti', 'ke', 'to', 'pe', 'la'];
  var weekdaysFull = ['sunnuntai', 'maanantai', 'tiistai', 'keskiviikko', 'torstai', 'perjantai', 'lauantai'];

  // In Finnish `a.m.` / `p.m.` are virtually never used, but it seems `AP` (aamupäivä) / `IP` (iltapäivä) are acknowleded terms:
  // https://fi.wikipedia.org/wiki/24_tunnin_kello
  function meridiem(date) {
    return date.getHours() < 12 ? 'AP' : 'IP';
  }

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
      // Finnish doesn't use two-char weekdays
      return weekdays2char[date.getDay()];
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function dddd(date) {
      return weekdaysFull[date.getDay()];
    },

    // AM, PM
    'A': meridiem,

    // am, pm
    'a': meridiem,

    // a.m., p.m.
    'aa': meridiem

    // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  };var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W'];
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return formatters[formatterToken](date).toString() + '.';
    };
  });

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  };
}

exports.default = mod_buildFormatLocale;
module.exports = exports.default;