"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var buildFormatLocale = _2.default;

describe('bg locale > buildFormatLocale', function () {
  it('returns an object', function () {
    assert(_typeof(buildFormatLocale()) === 'object');
  });

  describe('formatters property', function () {
    it('is an object', function () {
      assert(_typeof(buildFormatLocale().formatters) === 'object');
    });

    describe('MMM', function () {
      it('returns the correct string for January', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 0)) === 'яну');
      });

      it('returns the correct string for February', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 1)) === 'фев');
      });

      it('returns the correct string for March', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 2)) === 'мар');
      });

      it('returns the correct string for April', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2015, 3)) === 'апр');
      });

      it('returns the correct string for May', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 4)) === 'май');
      });

      it('returns the correct string for June', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 5)) === 'юни');
      });

      it('returns the correct string for July', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 6)) === 'юли');
      });

      it('returns the correct string for August', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 7)) === 'авг');
      });

      it('returns the correct string for September', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 8)) === 'сеп');
      });

      it('returns the correct string for October', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 9)) === 'окт');
      });

      it('returns the correct string for November', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 10)) === 'ное');
      });

      it('returns the correct string for December', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 11)) === 'дек');
      });
    });

    describe('MMMM', function () {
      it('returns the correct string for January', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 0)) === 'януари');
      });

      it('returns the correct string for February', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 1)) === 'февруари');
      });

      it('returns the correct string for March', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 2)) === 'март');
      });

      it('returns the correct string for April', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2015, 3)) === 'април');
      });

      it('returns the correct string for May', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 4)) === 'май');
      });

      it('returns the correct string for June', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 5)) === 'юни');
      });

      it('returns the correct string for July', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 6)) === 'юли');
      });

      it('returns the correct string for August', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 7)) === 'август');
      });

      it('returns the correct string for September', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 8)) === 'септември');
      });

      it('returns the correct string for October', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 9)) === 'октомври');
      });

      it('returns the correct string for November', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 10)) === 'ноември');
      });

      it('returns the correct string for December', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 11)) === 'декември');
      });
    });

    describe('dd', function () {
      it('returns the correct string for Sunday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 7)) === 'нд');
      });

      it('returns the correct string for Monday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 1)) === 'пн');
      });

      it('returns the correct string for Tuesday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 2)) === 'вт');
      });

      it('returns the correct string for Wednesday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 3)) === 'ср');
      });

      it('returns the correct string for Thursday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 4)) === 'чт');
      });

      it('returns the correct string for Friday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 5)) === 'пт');
      });

      it('returns the correct string for Saturday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 6)) === 'сб');
      });
    });

    describe('ddd', function () {
      it('returns the correct string for Sunday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 7)) === 'нед');
      });

      it('returns the correct string for Monday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 1)) === 'пон');
      });

      it('returns the correct string for Tuesday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 2)) === 'вто');
      });

      it('returns the correct string for Wednesday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 3)) === 'сря');
      });

      it('returns the correct string for Thursday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 4)) === 'чет');
      });

      it('returns the correct string for Friday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 5)) === 'пет');
      });

      it('returns the correct string for Saturday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 6)) === 'съб');
      });
    });

    describe('dddd', function () {
      it('returns the correct string for Sunday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 7)) === 'неделя');
      });

      it('returns the correct string for Monday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 1)) === 'понеделник');
      });

      it('returns the correct string for Tuesday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 2)) === 'вторник');
      });

      it('returns the correct string for Wednesday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 3)) === 'сряда');
      });

      it('returns the correct string for Thursday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 4)) === 'четвъртък');
      });

      it('returns the correct string for Friday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 5)) === 'петък');
      });

      it('returns the correct string for Saturday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 6)) === 'събота');
      });
    });

    describe('A', function () {
      it('returns the correct string for 4-11 a.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 4)) === 'сутринта');
      });

      it('returns the correct string for 17p.m.-3 a.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 17)) === 'вечерта');
      });

      it('returns the correct string for 12-13 p.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 12)) === 'на обяд');
      });

      it('returns the correct string for 14-17 p.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 14)) === 'следобед');
      });
    });

    describe('a', function () {
      it('returns the correct string for 4-11 a.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 11)) === 'сутринта');
      });

      it('returns the correct string for 17p.m.-3 a.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 3)) === 'вечерта');
      });

      it('returns the correct string for 12-13 p.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 13)) === 'на обяд');
      });

      it('returns the correct string for 14-16 p.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 16)) === 'следобед');
      });
    });

    describe('aa', function () {
      it('returns the correct string for 4-11 a.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 8)) === 'сутринта');
      });

      it('returns the correct string for 17p.m.-3 a.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 0)) === 'вечерта');
      });

      it('returns the correct string for 12-13 p.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 13)) === 'на обяд');
      });

      it('returns the correct string for 14-16 p.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 15)) === 'следобед');
      });
    });

    describe('Mo', function () {
      it('returns ordinal result of M formatter', function () {
        assert(buildFormatLocale().formatters.Mo(null, { M: function M() {
            return 1;
          } }) === '1-ви');
        assert(buildFormatLocale().formatters.Mo(null, { M: function M() {
            return 2;
          } }) === '2-ри');
        assert(buildFormatLocale().formatters.Mo(null, { M: function M() {
            return 3;
          } }) === '3-и');
        assert(buildFormatLocale().formatters.Mo(null, { M: function M() {
            return 11;
          } }) === '11-и');
        assert(buildFormatLocale().formatters.Mo(null, { M: function M() {
            return 101;
          } }) === '101-ви');
        assert(buildFormatLocale().formatters.Mo(null, { M: function M() {
            return 111;
          } }) === '111-и');
      });
    });

    describe('Do', function () {
      it('returns ordinal result of D formatter', function () {
        assert(buildFormatLocale().formatters.Do(null, { D: function D() {
            return 1;
          } }) === '1-ви');
        assert(buildFormatLocale().formatters.Do(null, { D: function D() {
            return 2;
          } }) === '2-ри');
        assert(buildFormatLocale().formatters.Do(null, { D: function D() {
            return 3;
          } }) === '3-и');
        assert(buildFormatLocale().formatters.Do(null, { D: function D() {
            return 11;
          } }) === '11-и');
        assert(buildFormatLocale().formatters.Do(null, { D: function D() {
            return 101;
          } }) === '101-ви');
        assert(buildFormatLocale().formatters.Do(null, { D: function D() {
            return 111;
          } }) === '111-и');
      });
    });

    describe('DDDo', function () {
      it('returns ordinal result of DDD formatter', function () {
        assert(buildFormatLocale().formatters.DDDo(null, { DDD: function DDD() {
            return 1;
          } }) === '1-ви');
        assert(buildFormatLocale().formatters.DDDo(null, { DDD: function DDD() {
            return 2;
          } }) === '2-ри');
        assert(buildFormatLocale().formatters.DDDo(null, { DDD: function DDD() {
            return 3;
          } }) === '3-и');
        assert(buildFormatLocale().formatters.DDDo(null, { DDD: function DDD() {
            return 11;
          } }) === '11-и');
        assert(buildFormatLocale().formatters.DDDo(null, { DDD: function DDD() {
            return 101;
          } }) === '101-ви');
        assert(buildFormatLocale().formatters.DDDo(null, { DDD: function DDD() {
            return 111;
          } }) === '111-и');
      });
    });

    describe('do', function () {
      it('returns ordinal result of d formatter', function () {
        assert(buildFormatLocale().formatters.do(null, { d: function d() {
            return 1;
          } }) === '1-ви');
        assert(buildFormatLocale().formatters.do(null, { d: function d() {
            return 2;
          } }) === '2-ри');
        assert(buildFormatLocale().formatters.do(null, { d: function d() {
            return 3;
          } }) === '3-и');
        assert(buildFormatLocale().formatters.do(null, { d: function d() {
            return 11;
          } }) === '11-и');
        assert(buildFormatLocale().formatters.do(null, { d: function d() {
            return 101;
          } }) === '101-ви');
        assert(buildFormatLocale().formatters.do(null, { d: function d() {
            return 111;
          } }) === '111-и');
      });
    });

    describe('Qo', function () {
      it('returns ordinal result of Q formatter', function () {
        assert(buildFormatLocale().formatters.Qo(null, { Q: function Q() {
            return 1;
          } }) === '1-ви');
        assert(buildFormatLocale().formatters.Qo(null, { Q: function Q() {
            return 2;
          } }) === '2-ри');
        assert(buildFormatLocale().formatters.Qo(null, { Q: function Q() {
            return 3;
          } }) === '3-и');
        assert(buildFormatLocale().formatters.Qo(null, { Q: function Q() {
            return 11;
          } }) === '11-и');
        assert(buildFormatLocale().formatters.Qo(null, { Q: function Q() {
            return 101;
          } }) === '101-ви');
        assert(buildFormatLocale().formatters.Qo(null, { Q: function Q() {
            return 111;
          } }) === '111-и');
      });
    });

    describe('Wo', function () {
      it('returns ordinal result of W formatter', function () {
        assert(buildFormatLocale().formatters.Wo(null, { W: function W() {
            return 1;
          } }) === '1-ви');
        assert(buildFormatLocale().formatters.Wo(null, { W: function W() {
            return 2;
          } }) === '2-ри');
        assert(buildFormatLocale().formatters.Wo(null, { W: function W() {
            return 3;
          } }) === '3-и');
        assert(buildFormatLocale().formatters.Wo(null, { W: function W() {
            return 11;
          } }) === '11-и');
        assert(buildFormatLocale().formatters.Wo(null, { W: function W() {
            return 101;
          } }) === '101-ви');
        assert(buildFormatLocale().formatters.Wo(null, { W: function W() {
            return 111;
          } }) === '111-и');
      });
    });
  });

  describe('formattingTokensRegExp property', function () {
    it('is an instance of RegExp', function () {
      assert(buildFormatLocale().formattingTokensRegExp instanceof RegExp);
    });
  });
});