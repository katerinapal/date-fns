'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildFormatLocale = undefined;

var _index = require('../../_lib/build_formatting_tokens_reg_exp/index.js');

var mod_buildFormatLocale = buildFormatLocale;

function buildFormatLocale() {
  var months3char = ['Ene', 'Peb', 'Mar', 'Abr', 'May', 'Hun', 'Hul', 'Ago', 'Set', 'Okt', 'Nob', 'Dis'];
  var monthsFull = ['Enero', 'Pebrero', 'Marso', 'Abril', 'Mayo', 'Hunyo', 'Hulyo', 'Agosto', 'Setyembre', 'Oktubre', 'Nobyembre', 'Disyembre'];
  var weekdays2char = ['Li', 'Lu', 'Ma', 'Mi', 'Hu', 'Bi', 'Sa'];
  var weekdays3char = ['Lin', 'Lun', 'Mar', 'Miy', 'Huw', 'Biy', 'Sab'];
  var weekdaysFull = ['Linggo', 'Lunes', 'Martes', 'Miyerkules', 'Huwebes', 'Biyernes', 'Sabado'];
  var meridiemUppercase = ['NU', 'NT', 'NH', 'NG'];
  var meridiemLowercase = ['nu', 'nt', 'nh', 'ng'];
  var meridiemFull = ['ng umaga', 'ng tanghali', 'ng hapon', 'ng gabi'];

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

    // AM, PM
    'A': function A(date) {
      if (date.getHours() > 12) {
        var modulo = date.getHours() % 12;
        if (modulo < 6) {
          return meridiemUppercase[2];
        } else {
          return meridiemUppercase[3];
        }
      } else if (date.getHours() < 12) {
        return meridiemUppercase[0];
      } else {
        return meridiemUppercase[1];
      }
    },

    // am, pm
    'a': function a(date) {
      if (date.getHours() > 12) {
        var modulo = date.getHours() % 12;
        if (modulo < 6) {
          return meridiemLowercase[2];
        } else {
          return meridiemLowercase[3];
        }
      } else if (date.getHours() < 12) {
        return meridiemLowercase[0];
      } else {
        return meridiemLowercase[1];
      }
    },

    // a.m., p.m.
    'aa': function aa(date) {
      if (date.getHours() > 12) {
        var modulo = date.getHours() % 12;
        if (modulo < 6) {
          return meridiemFull[2];
        } else {
          return meridiemFull[3];
        }
      } else if (date.getHours() < 12) {
        return meridiemFull[0];
      } else {
        return meridiemFull[1];
      }
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
    formattingTokensRegExp: (0, _index.buildFormattingTokensRegExp)(formatters)
  };
}

function ordinal(number) {
  return 'ika-' + number;
}

exports.buildFormatLocale = mod_buildFormatLocale;