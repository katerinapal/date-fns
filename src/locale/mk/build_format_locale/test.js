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

describe('mk locale > buildFormatLocale', function () {
  it('returns an object', function () {
    (0, _powerAssert2.default)(_typeof((0, _.buildFormatLocale)()) === 'object');
  });

  describe('formatters property', function () {
    it('is an object', function () {
      (0, _powerAssert2.default)(_typeof((0, _.buildFormatLocale)().formatters) === 'object');
    });

    describe('MMM', function () {
      it('returns the correct string for January', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 0)) === 'јан');
      });

      it('returns the correct string for February', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 1)) === 'фев');
      });

      it('returns the correct string for March', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 2)) === 'мар');
      });

      it('returns the correct string for April', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2015, 3)) === 'апр');
      });

      it('returns the correct string for May', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 4)) === 'мај');
      });

      it('returns the correct string for June', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 5)) === 'јун');
      });

      it('returns the correct string for July', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 6)) === 'јул');
      });

      it('returns the correct string for August', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 7)) === 'авг');
      });

      it('returns the correct string for September', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 8)) === 'сеп');
      });

      it('returns the correct string for October', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 9)) === 'окт');
      });

      it('returns the correct string for November', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 10)) === 'ное');
      });

      it('returns the correct string for December', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 11)) === 'дек');
      });
    });

    describe('MMMM', function () {
      it('returns the correct string for January', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 0)) === 'јануари');
      });

      it('returns the correct string for February', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 1)) === 'февруари');
      });

      it('returns the correct string for March', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 2)) === 'март');
      });

      it('returns the correct string for April', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2015, 3)) === 'април');
      });

      it('returns the correct string for May', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 4)) === 'мај');
      });

      it('returns the correct string for June', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 5)) === 'јуни');
      });

      it('returns the correct string for July', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 6)) === 'јули');
      });

      it('returns the correct string for August', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 7)) === 'август');
      });

      it('returns the correct string for September', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 8)) === 'септември');
      });

      it('returns the correct string for October', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 9)) === 'октомври');
      });

      it('returns the correct string for November', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 10)) === 'ноември');
      });

      it('returns the correct string for December', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 11)) === 'декември');
      });
    });

    describe('dd', function () {
      it('returns the correct string for Sunday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dd(new Date(2016, 1 /* Feb */, 7)) === 'не');
      });

      it('returns the correct string for Monday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dd(new Date(2016, 1 /* Feb */, 1)) === 'по');
      });

      it('returns the correct string for Tuesday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dd(new Date(2016, 1 /* Feb */, 2)) === 'вт');
      });

      it('returns the correct string for Wednesday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dd(new Date(2016, 1 /* Feb */, 3)) === 'ср');
      });

      it('returns the correct string for Thursday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dd(new Date(2016, 1 /* Feb */, 4)) === 'че');
      });

      it('returns the correct string for Friday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dd(new Date(2016, 1 /* Feb */, 5)) === 'пе');
      });

      it('returns the correct string for Saturday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dd(new Date(2016, 1 /* Feb */, 6)) === 'са');
      });
    });

    describe('ddd', function () {
      it('returns the correct string for Sunday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.ddd(new Date(2016, 1 /* Feb */, 7)) === 'нед');
      });

      it('returns the correct string for Monday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.ddd(new Date(2016, 1 /* Feb */, 1)) === 'пон');
      });

      it('returns the correct string for Tuesday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.ddd(new Date(2016, 1 /* Feb */, 2)) === 'вто');
      });

      it('returns the correct string for Wednesday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.ddd(new Date(2016, 1 /* Feb */, 3)) === 'сре');
      });

      it('returns the correct string for Thursday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.ddd(new Date(2016, 1 /* Feb */, 4)) === 'чет');
      });

      it('returns the correct string for Friday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.ddd(new Date(2016, 1 /* Feb */, 5)) === 'пет');
      });

      it('returns the correct string for Saturday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.ddd(new Date(2016, 1 /* Feb */, 6)) === 'саб');
      });
    });

    describe('dddd', function () {
      it('returns the correct string for Sunday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dddd(new Date(2016, 1 /* Feb */, 7)) === 'недела');
      });

      it('returns the correct string for Monday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dddd(new Date(2016, 1 /* Feb */, 1)) === 'понеделник');
      });

      it('returns the correct string for Tuesday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dddd(new Date(2016, 1 /* Feb */, 2)) === 'вторник');
      });

      it('returns the correct string for Wednesday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dddd(new Date(2016, 1 /* Feb */, 3)) === 'среда');
      });

      it('returns the correct string for Thursday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dddd(new Date(2016, 1 /* Feb */, 4)) === 'четврток');
      });

      it('returns the correct string for Friday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dddd(new Date(2016, 1 /* Feb */, 5)) === 'петок');
      });

      it('returns the correct string for Saturday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dddd(new Date(2016, 1 /* Feb */, 6)) === 'сабота');
      });
    });

    describe('A', function () {
      it('returns the correct string for 1-11 a.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.A(new Date(2016, 1 /* Feb */, 11, 1)) === 'претпладне');
      });

      it('returns the correct string for 12 a.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.A(new Date(2016, 1 /* Feb */, 11, 0)) === 'претпладне');
      });

      it('returns the correct string for 1-11 p.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.A(new Date(2016, 1 /* Feb */, 11, 13)) === 'попладне');
      });

      it('returns the correct string for 12 p.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.A(new Date(2016, 1 /* Feb */, 11, 12)) === 'попладне');
      });
    });

    describe('a', function () {
      it('returns the correct string for 1-11 a.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.a(new Date(2016, 1 /* Feb */, 11, 1)) === 'претпладне');
      });

      it('returns the correct string for 12 a.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.a(new Date(2016, 1 /* Feb */, 11, 0)) === 'претпладне');
      });

      it('returns the correct string for 1-11 p.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.a(new Date(2016, 1 /* Feb */, 11, 13)) === 'попладне');
      });

      it('returns the correct string for 12 p.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.a(new Date(2016, 1 /* Feb */, 11, 12)) === 'попладне');
      });
    });

    describe('aa', function () {
      it('returns the correct string for 1-11 a.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.aa(new Date(2016, 1 /* Feb */, 11, 1)) === 'претпладне');
      });

      it('returns the correct string for 12 a.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.aa(new Date(2016, 1 /* Feb */, 11, 0)) === 'претпладне');
      });

      it('returns the correct string for 1-11 p.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.aa(new Date(2016, 1 /* Feb */, 11, 13)) === 'попладне');
      });

      it('returns the correct string for 12 p.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.aa(new Date(2016, 1 /* Feb */, 11, 12)) === 'попладне');
      });
    });

    describe('Mo', function () {
      it('returns ordinal result of M formatter', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Mo(null, { M: function M() {
            return 1;
          } }) === '1-ви');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Mo(null, { M: function M() {
            return 2;
          } }) === '2-ри');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Mo(null, { M: function M() {
            return 3;
          } }) === '3-ти');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Mo(null, { M: function M() {
            return 7;
          } }) === '7-ми');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Mo(null, { M: function M() {
            return 8;
          } }) === '8-ми');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Mo(null, { M: function M() {
            return 11;
          } }) === '11-ти');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Mo(null, { M: function M() {
            return 101;
          } }) === '101-ви');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Mo(null, { M: function M() {
            return 111;
          } }) === '111-ти');
      });
    });

    describe('Do', function () {
      it('returns ordinal result of D formatter', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Do(null, { D: function D() {
            return 1;
          } }) === '1-ви');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Do(null, { D: function D() {
            return 2;
          } }) === '2-ри');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Do(null, { D: function D() {
            return 3;
          } }) === '3-ти');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Do(null, { D: function D() {
            return 7;
          } }) === '7-ми');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Do(null, { D: function D() {
            return 8;
          } }) === '8-ми');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Do(null, { D: function D() {
            return 11;
          } }) === '11-ти');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Do(null, { D: function D() {
            return 101;
          } }) === '101-ви');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Do(null, { D: function D() {
            return 111;
          } }) === '111-ти');
      });
    });

    describe('DDDo', function () {
      it('returns ordinal result of DDD formatter', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.DDDo(null, { DDD: function DDD() {
            return 1;
          } }) === '1-ви');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.DDDo(null, { DDD: function DDD() {
            return 2;
          } }) === '2-ри');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.DDDo(null, { DDD: function DDD() {
            return 3;
          } }) === '3-ти');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.DDDo(null, { DDD: function DDD() {
            return 7;
          } }) === '7-ми');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.DDDo(null, { DDD: function DDD() {
            return 8;
          } }) === '8-ми');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.DDDo(null, { DDD: function DDD() {
            return 11;
          } }) === '11-ти');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.DDDo(null, { DDD: function DDD() {
            return 101;
          } }) === '101-ви');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.DDDo(null, { DDD: function DDD() {
            return 111;
          } }) === '111-ти');
      });
    });

    describe('do', function () {
      it('returns ordinal result of d formatter', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.do(null, { d: function d() {
            return 1;
          } }) === '1-ви');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.do(null, { d: function d() {
            return 2;
          } }) === '2-ри');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.do(null, { d: function d() {
            return 3;
          } }) === '3-ти');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.do(null, { d: function d() {
            return 7;
          } }) === '7-ми');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.do(null, { d: function d() {
            return 8;
          } }) === '8-ми');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.do(null, { d: function d() {
            return 11;
          } }) === '11-ти');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.do(null, { d: function d() {
            return 101;
          } }) === '101-ви');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.do(null, { d: function d() {
            return 111;
          } }) === '111-ти');
      });
    });

    describe('Qo', function () {
      it('returns ordinal result of Q formatter', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Qo(null, { Q: function Q() {
            return 1;
          } }) === '1-ви');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Qo(null, { Q: function Q() {
            return 2;
          } }) === '2-ри');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Qo(null, { Q: function Q() {
            return 3;
          } }) === '3-ти');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Qo(null, { Q: function Q() {
            return 7;
          } }) === '7-ми');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Qo(null, { Q: function Q() {
            return 8;
          } }) === '8-ми');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Qo(null, { Q: function Q() {
            return 11;
          } }) === '11-ти');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Qo(null, { Q: function Q() {
            return 101;
          } }) === '101-ви');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Qo(null, { Q: function Q() {
            return 111;
          } }) === '111-ти');
      });
    });

    describe('Wo', function () {
      it('returns ordinal result of W formatter', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Wo(null, { W: function W() {
            return 1;
          } }) === '1-ви');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Wo(null, { W: function W() {
            return 2;
          } }) === '2-ри');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Wo(null, { W: function W() {
            return 3;
          } }) === '3-ти');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Wo(null, { W: function W() {
            return 7;
          } }) === '7-ми');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Wo(null, { W: function W() {
            return 8;
          } }) === '8-ми');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Wo(null, { W: function W() {
            return 11;
          } }) === '11-ти');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Wo(null, { W: function W() {
            return 101;
          } }) === '101-ви');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Wo(null, { W: function W() {
            return 111;
          } }) === '111-ти');
      });
    });
  });

  describe('formattingTokensRegExp property', function () {
    it('is an instance of RegExp', function () {
      (0, _powerAssert2.default)((0, _.buildFormatLocale)().formattingTokensRegExp instanceof RegExp);
    });
  });
});