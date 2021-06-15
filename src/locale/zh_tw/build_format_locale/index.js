'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildFormatLocale = undefined;

var _index = require('../../_lib/build_formatting_tokens_reg_exp/index.js');

var mod_buildFormatLocale = buildFormatLocale;

function buildFormatLocale() {
  var months3char = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
  var monthsFull = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
  var weekdays2char = ['日', '一', '二', '三', '四', '五', '六'];
  var weekdays3char = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  var weekdaysFull = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  var meridiemUppercase = ['AM', 'PM'];
  var meridiemLowercase = ['am', 'pm'];
  var meridiemFull = ['上午', '下午'];

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
      return date.getHours() / 12 >= 1 ? meridiemUppercase[1] : meridiemUppercase[0];
    },

    // am, pm
    'a': function a(date) {
      return date.getHours() / 12 >= 1 ? meridiemLowercase[1] : meridiemLowercase[0];
    },

    // a.m., p.m.
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
    formattingTokensRegExp: (0, _index.buildFormattingTokensRegExp)(formatters)
  };
}

function ordinal(number) {
  return number.toString();
}

exports.buildFormatLocale = mod_buildFormatLocale;