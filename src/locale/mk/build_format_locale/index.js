'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildFormatLocale = undefined;

var _index = require('../../_lib/build_formatting_tokens_reg_exp/index.js');

var mod_buildFormatLocale = buildFormatLocale;

function buildFormatLocale() {
  var months3char = ['јан', 'фев', 'мар', 'апр', 'мај', 'јун', 'јул', 'авг', 'сеп', 'окт', 'ное', 'дек'];
  var monthsFull = ['јануари', 'февруари', 'март', 'април', 'мај', 'јуни', 'јули', 'август', 'септември', 'октомври', 'ноември', 'декември'];
  var weekdays2char = ['не', 'по', 'вт', 'ср', 'че', 'пе', 'са'];
  var weekdays3char = ['нед', 'пон', 'вто', 'сре', 'чет', 'пет', 'саб'];
  var weekdaysFull = ['недела', 'понеделник', 'вторник', 'среда', 'четврток', 'петок', 'сабота'];
  var meridiem = ['претпладне', 'попладне'];

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
      return date.getHours() / 12 >= 1 ? meridiem[1] : meridiem[0];
    },

    // am, pm
    'a': function a(date) {
      return date.getHours() / 12 >= 1 ? meridiem[1] : meridiem[0];
    },

    // a.m., p.m.
    'aa': function aa(date) {
      return date.getHours() / 12 >= 1 ? meridiem[1] : meridiem[0];
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
  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + '-ви';
      case 2:
        return number + '-ри';
      case 7:
      case 8:
        return number + '-ми';
    }
  }
  return number + '-ти';
}

exports.buildFormatLocale = mod_buildFormatLocale;