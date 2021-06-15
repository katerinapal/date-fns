'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildFormatLocale = undefined;

var _index = require('../../_lib/build_formatting_tokens_reg_exp/index.js');

var mod_buildFormatLocale = buildFormatLocale;

function buildFormatLocale() {
  var months3char = ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru'];
  var monthsFull = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'];
  var weekdays2char = ['nd', 'pn', 'wt', 'śr', 'cz', 'pt', 'sb'];
  var weekdays3char = ['niedz.', 'pon.', 'wt.', 'śr.', 'czw.', 'piąt.', 'sob.'];
  var weekdaysFull = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'];
  var meridiem = ['w nocy', 'rano', 'po południu', 'wieczorem'];

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

    // Time of day
    'A': function A(date) {
      var hours = date.getHours();
      if (hours >= 17) {
        return meridiem[3];
      } else if (hours >= 12) {
        return meridiem[2];
      } else if (hours >= 4) {
        return meridiem[1];
      } else {
        return meridiem[0];
      }
    }
  };

  formatters.a = formatters.A;
  formatters.aa = formatters.A;

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W'];
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      // Well, it should be just a number without any suffix
      return formatters[formatterToken](date).toString();
    };
  });

  return {
    formatters: formatters,
    formattingTokensRegExp: (0, _index.buildFormattingTokensRegExp)(formatters)
  };
}

exports.buildFormatLocale = mod_buildFormatLocale;