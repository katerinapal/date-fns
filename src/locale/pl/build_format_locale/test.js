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

describe('pl locale > buildFormatLocale', function () {
  it('returns an object', function () {
    (0, _powerAssert2.default)(_typeof((0, _.buildFormatLocale)()) === 'object');
  });

  describe('formatters property', function () {
    it('is an object', function () {
      (0, _powerAssert2.default)(_typeof((0, _.buildFormatLocale)().formatters) === 'object');
    });

    describe('MMM', function () {
      it('returns the correct string for January', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 0)) === 'sty');
      });

      it('returns the correct string for February', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 1)) === 'lut');
      });

      it('returns the correct string for March', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 2)) === 'mar');
      });

      it('returns the correct string for April', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2015, 3)) === 'kwi');
      });

      it('returns the correct string for May', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 4)) === 'maj');
      });

      it('returns the correct string for June', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 5)) === 'cze');
      });

      it('returns the correct string for July', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 6)) === 'lip');
      });

      it('returns the correct string for August', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 7)) === 'sie');
      });

      it('returns the correct string for September', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 8)) === 'wrz');
      });

      it('returns the correct string for October', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 9)) === 'paź');
      });

      it('returns the correct string for November', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 10)) === 'lis');
      });

      it('returns the correct string for December', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 11)) === 'gru');
      });
    });

    describe('MMMM', function () {
      it('returns the correct string for January', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 0)) === 'styczeń');
      });

      it('returns the correct string for February', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 1)) === 'luty');
      });

      it('returns the correct string for March', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 2)) === 'marzec');
      });

      it('returns the correct string for April', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2015, 3)) === 'kwiecień');
      });

      it('returns the correct string for May', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 4)) === 'maj');
      });

      it('returns the correct string for June', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 5)) === 'czerwiec');
      });

      it('returns the correct string for July', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 6)) === 'lipiec');
      });

      it('returns the correct string for August', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 7)) === 'sierpień');
      });

      it('returns the correct string for September', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 8)) === 'wrzesień');
      });

      it('returns the correct string for October', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 9)) === 'październik');
      });

      it('returns the correct string for November', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 10)) === 'listopad');
      });

      it('returns the correct string for December', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 11)) === 'grudzień');
      });
    });

    describe('dd', function () {
      it('returns the correct string for Sunday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dd(new Date(2016, 1 /* Feb */, 7)) === 'nd');
      });

      it('returns the correct string for Monday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dd(new Date(2016, 1 /* Feb */, 1)) === 'pn');
      });

      it('returns the correct string for Tuesday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dd(new Date(2016, 1 /* Feb */, 2)) === 'wt');
      });

      it('returns the correct string for Wednesday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dd(new Date(2016, 1 /* Feb */, 3)) === 'śr');
      });

      it('returns the correct string for Thursday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dd(new Date(2016, 1 /* Feb */, 4)) === 'cz');
      });

      it('returns the correct string for Friday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dd(new Date(2016, 1 /* Feb */, 5)) === 'pt');
      });

      it('returns the correct string for Saturday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dd(new Date(2016, 1 /* Feb */, 6)) === 'sb');
      });
    });

    describe('ddd', function () {
      it('returns the correct string for Sunday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.ddd(new Date(2016, 1 /* Feb */, 7)) === 'niedz.');
      });

      it('returns the correct string for Monday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.ddd(new Date(2016, 1 /* Feb */, 1)) === 'pon.');
      });

      it('returns the correct string for Tuesday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.ddd(new Date(2016, 1 /* Feb */, 2)) === 'wt.');
      });

      it('returns the correct string for Wednesday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.ddd(new Date(2016, 1 /* Feb */, 3)) === 'śr.');
      });

      it('returns the correct string for Thursday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.ddd(new Date(2016, 1 /* Feb */, 4)) === 'czw.');
      });

      it('returns the correct string for Friday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.ddd(new Date(2016, 1 /* Feb */, 5)) === 'piąt.');
      });

      it('returns the correct string for Saturday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.ddd(new Date(2016, 1 /* Feb */, 6)) === 'sob.');
      });
    });

    describe('dddd', function () {
      it('returns the correct string for Sunday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dddd(new Date(2016, 1 /* Feb */, 7)) === 'niedziela');
      });

      it('returns the correct string for Monday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dddd(new Date(2016, 1 /* Feb */, 1)) === 'poniedziałek');
      });

      it('returns the correct string for Tuesday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dddd(new Date(2016, 1 /* Feb */, 2)) === 'wtorek');
      });

      it('returns the correct string for Wednesday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dddd(new Date(2016, 1 /* Feb */, 3)) === 'środa');
      });

      it('returns the correct string for Thursday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dddd(new Date(2016, 1 /* Feb */, 4)) === 'czwartek');
      });

      it('returns the correct string for Friday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dddd(new Date(2016, 1 /* Feb */, 5)) === 'piątek');
      });

      it('returns the correct string for Saturday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dddd(new Date(2016, 1 /* Feb */, 6)) === 'sobota');
      });
    });

    describe('A', function () {
      it('returns the correct string for 12-3 a.m.', function () {
        [0, 1, 2, 3].forEach(function (hours) {
          (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.A(new Date(2016, 1 /* Feb */, 11, hours)) === 'w nocy');
        });
      });

      it('returns the correct string for 4-11 a.m.', function () {
        [4, 5, 6, 7, 8, 9, 10, 11].forEach(function (hours) {
          (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.A(new Date(2016, 1 /* Feb */, 11, hours)) === 'rano');
        });
      });

      it('returns the correct string for 12-4 p.m.', function () {
        [12, 13, 14, 15, 16].forEach(function (hours) {
          (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.A(new Date(2016, 1 /* Feb */, 11, hours)) === 'po południu');
        });
      });

      it('returns the correct string for 5-11 p.m.', function () {
        [17, 18, 19, 20, 21, 22, 23].forEach(function (hours) {
          (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.A(new Date(2016, 1 /* Feb */, 11, hours)) === 'wieczorem');
        });
      });
    });

    describe('a', function () {
      it('returns the correct string for 12-3 a.m.', function () {
        [0, 1, 2, 3].forEach(function (hours) {
          (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.A(new Date(2016, 1 /* Feb */, 11, hours)) === 'w nocy');
        });
      });

      it('returns the correct string for 4-11 a.m.', function () {
        [4, 5, 6, 7, 8, 9, 10, 11].forEach(function (hours) {
          (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.A(new Date(2016, 1 /* Feb */, 11, hours)) === 'rano');
        });
      });

      it('returns the correct string for 12-4 p.m.', function () {
        [12, 13, 14, 15, 16].forEach(function (hours) {
          (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.A(new Date(2016, 1 /* Feb */, 11, hours)) === 'po południu');
        });
      });

      it('returns the correct string for 5-11 p.m.', function () {
        [17, 18, 19, 20, 21, 22, 23].forEach(function (hours) {
          (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.A(new Date(2016, 1 /* Feb */, 11, hours)) === 'wieczorem');
        });
      });
    });

    describe('aa', function () {
      it('returns the correct string for 12-3 a.m.', function () {
        [0, 1, 2, 3].forEach(function (hours) {
          (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.A(new Date(2016, 1 /* Feb */, 11, hours)) === 'w nocy');
        });
      });

      it('returns the correct string for 4-11 a.m.', function () {
        [4, 5, 6, 7, 8, 9, 10, 11].forEach(function (hours) {
          (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.A(new Date(2016, 1 /* Feb */, 11, hours)) === 'rano');
        });
      });

      it('returns the correct string for 12-4 p.m.', function () {
        [12, 13, 14, 15, 16].forEach(function (hours) {
          (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.A(new Date(2016, 1 /* Feb */, 11, hours)) === 'po południu');
        });
      });

      it('returns the correct string for 5-11 p.m.', function () {
        [17, 18, 19, 20, 21, 22, 23].forEach(function (hours) {
          (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.A(new Date(2016, 1 /* Feb */, 11, hours)) === 'wieczorem');
        });
      });
    });

    describe('Mo', function () {
      it('returns ordinal result of M formatter', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Mo(null, { M: function M() {
            return 1;
          } }) === '1');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Mo(null, { M: function M() {
            return 2;
          } }) === '2');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Mo(null, { M: function M() {
            return 3;
          } }) === '3');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Mo(null, { M: function M() {
            return 11;
          } }) === '11');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Mo(null, { M: function M() {
            return 101;
          } }) === '101');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Mo(null, { M: function M() {
            return 111;
          } }) === '111');
      });
    });

    describe('Do', function () {
      it('returns ordinal result of D formatter', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Do(null, { D: function D() {
            return 1;
          } }) === '1');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Do(null, { D: function D() {
            return 2;
          } }) === '2');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Do(null, { D: function D() {
            return 3;
          } }) === '3');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Do(null, { D: function D() {
            return 11;
          } }) === '11');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Do(null, { D: function D() {
            return 101;
          } }) === '101');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Do(null, { D: function D() {
            return 111;
          } }) === '111');
      });
    });

    describe('DDDo', function () {
      it('returns ordinal result of DDD formatter', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.DDDo(null, { DDD: function DDD() {
            return 1;
          } }) === '1');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.DDDo(null, { DDD: function DDD() {
            return 2;
          } }) === '2');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.DDDo(null, { DDD: function DDD() {
            return 3;
          } }) === '3');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.DDDo(null, { DDD: function DDD() {
            return 11;
          } }) === '11');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.DDDo(null, { DDD: function DDD() {
            return 101;
          } }) === '101');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.DDDo(null, { DDD: function DDD() {
            return 111;
          } }) === '111');
      });
    });

    describe('do', function () {
      it('returns ordinal result of d formatter', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.do(null, { d: function d() {
            return 1;
          } }) === '1');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.do(null, { d: function d() {
            return 2;
          } }) === '2');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.do(null, { d: function d() {
            return 3;
          } }) === '3');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.do(null, { d: function d() {
            return 11;
          } }) === '11');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.do(null, { d: function d() {
            return 101;
          } }) === '101');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.do(null, { d: function d() {
            return 111;
          } }) === '111');
      });
    });

    describe('Qo', function () {
      it('returns ordinal result of Q formatter', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Qo(null, { Q: function Q() {
            return 1;
          } }) === '1');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Qo(null, { Q: function Q() {
            return 2;
          } }) === '2');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Qo(null, { Q: function Q() {
            return 3;
          } }) === '3');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Qo(null, { Q: function Q() {
            return 11;
          } }) === '11');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Qo(null, { Q: function Q() {
            return 101;
          } }) === '101');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Qo(null, { Q: function Q() {
            return 111;
          } }) === '111');
      });
    });

    describe('Wo', function () {
      it('returns ordinal result of W formatter', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Wo(null, { W: function W() {
            return 1;
          } }) === '1');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Wo(null, { W: function W() {
            return 2;
          } }) === '2');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Wo(null, { W: function W() {
            return 3;
          } }) === '3');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Wo(null, { W: function W() {
            return 11;
          } }) === '11');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Wo(null, { W: function W() {
            return 101;
          } }) === '101');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Wo(null, { W: function W() {
            return 111;
          } }) === '111');
      });
    });
  });

  describe('formattingTokensRegExp property', function () {
    it('is an instance of RegExp', function () {
      (0, _powerAssert2.default)((0, _.buildFormatLocale)().formattingTokensRegExp instanceof RegExp);
    });
  });
});