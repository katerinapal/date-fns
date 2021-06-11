"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

describe('ko locale > buildFormatLocale', function () {
  it('returns an object', function () {
    (0, _powerAssert2.default)(_typeof((0, _.buildFormatLocale)()) === 'object');
  });

  describe('formatters property', function () {
    it('is an object', function () {
      (0, _powerAssert2.default)(_typeof((0, _.buildFormatLocale)().formatters) === 'object');
    });

    describe('MMM', function () {
      it('returns the correct string for January', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 0)) === '1월');
      });

      it('returns the correct string for February', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 1)) === '2월');
      });

      it('returns the correct string for March', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 2)) === '3월');
      });

      it('returns the correct string for April', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2015, 3)) === '4월');
      });

      it('returns the correct string for May', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 4)) === '5월');
      });

      it('returns the correct string for June', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 5)) === '6월');
      });

      it('returns the correct string for July', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 6)) === '7월');
      });

      it('returns the correct string for August', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 7)) === '8월');
      });

      it('returns the correct string for September', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 8)) === '9월');
      });

      it('returns the correct string for October', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 9)) === '10월');
      });

      it('returns the correct string for November', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 10)) === '11월');
      });

      it('returns the correct string for December', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 11)) === '12월');
      });
    });

    describe('MMMM', function () {
      it('returns the correct string for January', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 0)) === '1월');
      });

      it('returns the correct string for February', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 1)) === '2월');
      });

      it('returns the correct string for March', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 2)) === '3월');
      });

      it('returns the correct string for April', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2015, 3)) === '4월');
      });

      it('returns the correct string for May', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 4)) === '5월');
      });

      it('returns the correct string for June', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 5)) === '6월');
      });

      it('returns the correct string for July', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 6)) === '7월');
      });

      it('returns the correct string for August', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 7)) === '8월');
      });

      it('returns the correct string for September', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 8)) === '9월');
      });

      it('returns the correct string for October', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 9)) === '10월');
      });

      it('returns the correct string for November', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 10)) === '11월');
      });

      it('returns the correct string for December', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 11)) === '12월');
      });
    });

    describe('dd', function () {
      it('returns the correct string for Sunday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dd(new Date(2016, 1 /* Feb */, 7)) === '일');
      });

      it('returns the correct string for Monday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dd(new Date(2016, 1 /* Feb */, 1)) === '월');
      });

      it('returns the correct string for Tuesday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dd(new Date(2016, 1 /* Feb */, 2)) === '화');
      });

      it('returns the correct string for Wednesday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dd(new Date(2016, 1 /* Feb */, 3)) === '수');
      });

      it('returns the correct string for Thursday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dd(new Date(2016, 1 /* Feb */, 4)) === '목');
      });

      it('returns the correct string for Friday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dd(new Date(2016, 1 /* Feb */, 5)) === '금');
      });

      it('returns the correct string for Saturday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dd(new Date(2016, 1 /* Feb */, 6)) === '토');
      });
    });

    describe('ddd', function () {
      it('returns the correct string for Sunday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.ddd(new Date(2016, 1 /* Feb */, 7)) === '일');
      });

      it('returns the correct string for Monday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.ddd(new Date(2016, 1 /* Feb */, 1)) === '월');
      });

      it('returns the correct string for Tuesday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.ddd(new Date(2016, 1 /* Feb */, 2)) === '화');
      });

      it('returns the correct string for Wednesday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.ddd(new Date(2016, 1 /* Feb */, 3)) === '수');
      });

      it('returns the correct string for Thursday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.ddd(new Date(2016, 1 /* Feb */, 4)) === '목');
      });

      it('returns the correct string for Friday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.ddd(new Date(2016, 1 /* Feb */, 5)) === '금');
      });

      it('returns the correct string for Saturday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.ddd(new Date(2016, 1 /* Feb */, 6)) === '토');
      });
    });

    describe('dddd', function () {
      it('returns the correct string for Sunday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dddd(new Date(2016, 1 /* Feb */, 7)) === '일요일');
      });

      it('returns the correct string for Monday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dddd(new Date(2016, 1 /* Feb */, 1)) === '월요일');
      });

      it('returns the correct string for Tuesday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dddd(new Date(2016, 1 /* Feb */, 2)) === '화요일');
      });

      it('returns the correct string for Wednesday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dddd(new Date(2016, 1 /* Feb */, 3)) === '수요일');
      });

      it('returns the correct string for Thursday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dddd(new Date(2016, 1 /* Feb */, 4)) === '목요일');
      });

      it('returns the correct string for Friday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dddd(new Date(2016, 1 /* Feb */, 5)) === '금요일');
      });

      it('returns the correct string for Saturday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dddd(new Date(2016, 1 /* Feb */, 6)) === '토요일');
      });
    });

    describe('A', function () {
      it('returns the correct string for 1-11 a.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.A(new Date(2016, 1 /* Feb */, 11, 1)) === '오전');
      });

      it('returns the correct string for 12 a.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.A(new Date(2016, 1 /* Feb */, 11, 0)) === '오전');
      });

      it('returns the correct string for 1-11 p.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.A(new Date(2016, 1 /* Feb */, 11, 13)) === '오후');
      });

      it('returns the correct string for 12 p.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.A(new Date(2016, 1 /* Feb */, 11, 12)) === '오후');
      });
    });

    describe('a', function () {
      it('returns the correct string for 1-11 a.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.a(new Date(2016, 1 /* Feb */, 11, 1)) === '오전');
      });

      it('returns the correct string for 12 a.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.a(new Date(2016, 1 /* Feb */, 11, 0)) === '오전');
      });

      it('returns the correct string for 1-11 p.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.a(new Date(2016, 1 /* Feb */, 11, 13)) === '오후');
      });

      it('returns the correct string for 12 p.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.a(new Date(2016, 1 /* Feb */, 11, 12)) === '오후');
      });
    });

    describe('aa', function () {
      it('returns the correct string for 1-11 a.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.aa(new Date(2016, 1 /* Feb */, 11, 1)) === '오전');
      });

      it('returns the correct string for 12 a.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.aa(new Date(2016, 1 /* Feb */, 11, 0)) === '오전');
      });

      it('returns the correct string for 1-11 p.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.aa(new Date(2016, 1 /* Feb */, 11, 13)) === '오후');
      });

      it('returns the correct string for 12 p.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.aa(new Date(2016, 1 /* Feb */, 11, 12)) === '오후');
      });
    });

    describe('Mo', function () {
      it('returns ordinal result of M formatter', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Mo(null, { M: function M() {
            return 1;
          } }) === '1일');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Mo(null, { M: function M() {
            return 2;
          } }) === '2일');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Mo(null, { M: function M() {
            return 3;
          } }) === '3일');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Mo(null, { M: function M() {
            return 11;
          } }) === '11일');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Mo(null, { M: function M() {
            return 101;
          } }) === '101일');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Mo(null, { M: function M() {
            return 111;
          } }) === '111일');
      });
    });

    describe('Do', function () {
      it('returns ordinal result of D formatter', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Do(null, { D: function D() {
            return 1;
          } }) === '1일');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Do(null, { D: function D() {
            return 2;
          } }) === '2일');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Do(null, { D: function D() {
            return 3;
          } }) === '3일');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Do(null, { D: function D() {
            return 11;
          } }) === '11일');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Do(null, { D: function D() {
            return 101;
          } }) === '101일');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Do(null, { D: function D() {
            return 111;
          } }) === '111일');
      });
    });

    describe('DDDo', function () {
      it('returns ordinal result of DDD formatter', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.DDDo(null, { DDD: function DDD() {
            return 1;
          } }) === '1일');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.DDDo(null, { DDD: function DDD() {
            return 2;
          } }) === '2일');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.DDDo(null, { DDD: function DDD() {
            return 3;
          } }) === '3일');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.DDDo(null, { DDD: function DDD() {
            return 11;
          } }) === '11일');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.DDDo(null, { DDD: function DDD() {
            return 101;
          } }) === '101일');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.DDDo(null, { DDD: function DDD() {
            return 111;
          } }) === '111일');
      });
    });

    describe('do', function () {
      it('returns ordinal result of d formatter', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.do(null, { d: function d() {
            return 1;
          } }) === '1일');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.do(null, { d: function d() {
            return 2;
          } }) === '2일');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.do(null, { d: function d() {
            return 3;
          } }) === '3일');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.do(null, { d: function d() {
            return 11;
          } }) === '11일');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.do(null, { d: function d() {
            return 101;
          } }) === '101일');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.do(null, { d: function d() {
            return 111;
          } }) === '111일');
      });
    });

    describe('Qo', function () {
      it('returns ordinal result of Q formatter', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Qo(null, { Q: function Q() {
            return 1;
          } }) === '1일');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Qo(null, { Q: function Q() {
            return 2;
          } }) === '2일');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Qo(null, { Q: function Q() {
            return 3;
          } }) === '3일');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Qo(null, { Q: function Q() {
            return 11;
          } }) === '11일');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Qo(null, { Q: function Q() {
            return 101;
          } }) === '101일');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Qo(null, { Q: function Q() {
            return 111;
          } }) === '111일');
      });
    });

    describe('Wo', function () {
      it('returns ordinal result of W formatter', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Wo(null, { W: function W() {
            return 1;
          } }) === '1일');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Wo(null, { W: function W() {
            return 2;
          } }) === '2일');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Wo(null, { W: function W() {
            return 3;
          } }) === '3일');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Wo(null, { W: function W() {
            return 11;
          } }) === '11일');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Wo(null, { W: function W() {
            return 101;
          } }) === '101일');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Wo(null, { W: function W() {
            return 111;
          } }) === '111일');
      });
    });
  });

  describe('formattingTokensRegExp property', function () {
    it('is an instance of RegExp', function () {
      (0, _powerAssert2.default)((0, _.buildFormatLocale)().formattingTokensRegExp instanceof RegExp);
    });
  });
});