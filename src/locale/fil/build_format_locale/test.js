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

describe('fil locale > buildFormatLocale', function () {
  it('returns an object', function () {
    (0, _powerAssert2.default)(_typeof((0, _.buildFormatLocale)()) === 'object');
  });

  describe('formatters property', function () {
    it('is an object', function () {
      (0, _powerAssert2.default)(_typeof((0, _.buildFormatLocale)().formatters) === 'object');
    });

    describe('MMM', function () {
      it('returns the correct string for January', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 0)) === 'Ene');
      });

      it('returns the correct string for February', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 1)) === 'Peb');
      });

      it('returns the correct string for March', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 2)) === 'Mar');
      });

      it('returns the correct string for April', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2015, 3)) === 'Abr');
      });

      it('returns the correct string for May', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 4)) === 'May');
      });

      it('returns the correct string for June', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 5)) === 'Hun');
      });

      it('returns the correct string for July', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 6)) === 'Hul');
      });

      it('returns the correct string for August', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 7)) === 'Ago');
      });

      it('returns the correct string for September', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 8)) === 'Set');
      });

      it('returns the correct string for October', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 9)) === 'Okt');
      });

      it('returns the correct string for November', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 10)) === 'Nob');
      });

      it('returns the correct string for December', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 11)) === 'Dis');
      });
    });

    describe('MMMM', function () {
      it('returns the correct string for January', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 0)) === 'Enero');
      });

      it('returns the correct string for February', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 1)) === 'Pebrero');
      });

      it('returns the correct string for March', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 2)) === 'Marso');
      });

      it('returns the correct string for April', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2015, 3)) === 'Abril');
      });

      it('returns the correct string for May', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 4)) === 'Mayo');
      });

      it('returns the correct string for June', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 5)) === 'Hunyo');
      });

      it('returns the correct string for July', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 6)) === 'Hulyo');
      });

      it('returns the correct string for August', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 7)) === 'Agosto');
      });

      it('returns the correct string for September', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 8)) === 'Setyembre');
      });

      it('returns the correct string for October', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 9)) === 'Oktubre');
      });

      it('returns the correct string for November', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 10)) === 'Nobyembre');
      });

      it('returns the correct string for December', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 11)) === 'Disyembre');
      });
    });

    describe('dd', function () {
      it('returns the correct string for Sunday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dd(new Date(2016, 1 /* Feb */, 7)) === 'Li');
      });

      it('returns the correct string for Monday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dd(new Date(2016, 1 /* Feb */, 1)) === 'Lu');
      });

      it('returns the correct string for Tuesday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dd(new Date(2016, 1 /* Feb */, 2)) === 'Ma');
      });

      it('returns the correct string for Wednesday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dd(new Date(2016, 1 /* Feb */, 3)) === 'Mi');
      });

      it('returns the correct string for Thursday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dd(new Date(2016, 1 /* Feb */, 4)) === 'Hu');
      });

      it('returns the correct string for Friday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dd(new Date(2016, 1 /* Feb */, 5)) === 'Bi');
      });

      it('returns the correct string for Saturday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dd(new Date(2016, 1 /* Feb */, 6)) === 'Sa');
      });
    });

    describe('ddd', function () {
      it('returns the correct string for Sunday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.ddd(new Date(2016, 1 /* Feb */, 7)) === 'Lin');
      });

      it('returns the correct string for Monday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.ddd(new Date(2016, 1 /* Feb */, 1)) === 'Lun');
      });

      it('returns the correct string for Tuesday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.ddd(new Date(2016, 1 /* Feb */, 2)) === 'Mar');
      });

      it('returns the correct string for Wednesday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.ddd(new Date(2016, 1 /* Feb */, 3)) === 'Miy');
      });

      it('returns the correct string for Thursday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.ddd(new Date(2016, 1 /* Feb */, 4)) === 'Huw');
      });

      it('returns the correct string for Friday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.ddd(new Date(2016, 1 /* Feb */, 5)) === 'Biy');
      });

      it('returns the correct string for Saturday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.ddd(new Date(2016, 1 /* Feb */, 6)) === 'Sab');
      });
    });

    describe('dddd', function () {
      it('returns the correct string for Sunday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dddd(new Date(2016, 1 /* Feb */, 7)) === 'Linggo');
      });

      it('returns the correct string for Monday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dddd(new Date(2016, 1 /* Feb */, 1)) === 'Lunes');
      });

      it('returns the correct string for Tuesday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dddd(new Date(2016, 1 /* Feb */, 2)) === 'Martes');
      });

      it('returns the correct string for Wednesday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dddd(new Date(2016, 1 /* Feb */, 3)) === 'Miyerkules');
      });

      it('returns the correct string for Thursday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dddd(new Date(2016, 1 /* Feb */, 4)) === 'Huwebes');
      });

      it('returns the correct string for Friday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dddd(new Date(2016, 1 /* Feb */, 5)) === 'Biyernes');
      });

      it('returns the correct string for Saturday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dddd(new Date(2016, 1 /* Feb */, 6)) === 'Sabado');
      });
    });

    describe('A', function () {
      it('returns the correct string for 1-11 a.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.A(new Date(2016, 1 /* Feb */, 11, 1)) === 'NU');
      });

      it('returns the correct string for 12 a.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.A(new Date(2016, 1 /* Feb */, 11, 0)) === 'NU');
      });

      it('returns the correct string for 12 p.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.A(new Date(2016, 1 /* Feb */, 11, 12)) === 'NT');
      });

      it('returns the correct string for 1-5 p.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.A(new Date(2016, 1 /* Feb */, 11, 13)) === 'NH');
      });

      it('returns the correct string for 6-11 p.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.A(new Date(2016, 1 /* Feb */, 11, 18)) === 'NG');
      });
    });

    describe('a', function () {
      it('returns the correct string for 1-11 a.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.a(new Date(2016, 1 /* Feb */, 11, 1)) === 'nu');
      });

      it('returns the correct string for 12 a.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.a(new Date(2016, 1 /* Feb */, 11, 0)) === 'nu');
      });

      it('returns the correct string for 12 p.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.a(new Date(2016, 1 /* Feb */, 11, 12)) === 'nt');
      });

      it('returns the correct string for 1-5 p.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.a(new Date(2016, 1 /* Feb */, 11, 13)) === 'nh');
      });

      it('returns the correct string for 6-11 p.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.a(new Date(2016, 1 /* Feb */, 11, 18)) === 'ng');
      });
    });

    describe('aa', function () {
      it('returns the correct string for 1-11 a.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.aa(new Date(2016, 1 /* Feb */, 11, 1)) === 'ng umaga');
      });

      it('returns the correct string for 12 a.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.aa(new Date(2016, 1 /* Feb */, 11, 0)) === 'ng umaga');
      });

      it('returns the correct string for 12 p.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.aa(new Date(2016, 1 /* Feb */, 11, 12)) === 'ng tanghali');
      });

      it('returns the correct string for 1-5 p.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.aa(new Date(2016, 1 /* Feb */, 11, 13)) === 'ng hapon');
      });

      it('returns the correct string for 6-11 p.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.aa(new Date(2016, 1 /* Feb */, 11, 18)) === 'ng gabi');
      });
    });

    describe('Mo', function () {
      it('returns ordinal result of M formatter', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Mo(null, { M: function M() {
            return 1;
          } }) === 'ika-1');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Mo(null, { M: function M() {
            return 2;
          } }) === 'ika-2');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Mo(null, { M: function M() {
            return 3;
          } }) === 'ika-3');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Mo(null, { M: function M() {
            return 10;
          } }) === 'ika-10');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Mo(null, { M: function M() {
            return 20;
          } }) === 'ika-20');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Mo(null, { M: function M() {
            return 30;
          } }) === 'ika-30');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Mo(null, { M: function M() {
            return 100;
          } }) === 'ika-100');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Mo(null, { M: function M() {
            return 700;
          } }) === 'ika-700');
      });
    });

    describe('Do', function () {
      it('returns ordinal result of D formatter', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Do(null, { D: function D() {
            return 1;
          } }) === 'ika-1');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Do(null, { D: function D() {
            return 2;
          } }) === 'ika-2');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Do(null, { D: function D() {
            return 3;
          } }) === 'ika-3');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Do(null, { D: function D() {
            return 10;
          } }) === 'ika-10');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Do(null, { D: function D() {
            return 20;
          } }) === 'ika-20');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Do(null, { D: function D() {
            return 30;
          } }) === 'ika-30');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Do(null, { D: function D() {
            return 100;
          } }) === 'ika-100');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Do(null, { D: function D() {
            return 700;
          } }) === 'ika-700');
      });
    });

    describe('DDDo', function () {
      it('returns ordinal result of DDD formatter', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.DDDo(null, { DDD: function DDD() {
            return 1;
          } }) === 'ika-1');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.DDDo(null, { DDD: function DDD() {
            return 2;
          } }) === 'ika-2');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.DDDo(null, { DDD: function DDD() {
            return 3;
          } }) === 'ika-3');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.DDDo(null, { DDD: function DDD() {
            return 10;
          } }) === 'ika-10');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.DDDo(null, { DDD: function DDD() {
            return 20;
          } }) === 'ika-20');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.DDDo(null, { DDD: function DDD() {
            return 30;
          } }) === 'ika-30');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.DDDo(null, { DDD: function DDD() {
            return 100;
          } }) === 'ika-100');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.DDDo(null, { DDD: function DDD() {
            return 700;
          } }) === 'ika-700');
      });
    });

    describe('do', function () {
      it('returns ordinal result of d formatter', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.do(null, { d: function d() {
            return 1;
          } }) === 'ika-1');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.do(null, { d: function d() {
            return 2;
          } }) === 'ika-2');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.do(null, { d: function d() {
            return 3;
          } }) === 'ika-3');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.do(null, { d: function d() {
            return 10;
          } }) === 'ika-10');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.do(null, { d: function d() {
            return 20;
          } }) === 'ika-20');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.do(null, { d: function d() {
            return 30;
          } }) === 'ika-30');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.do(null, { d: function d() {
            return 100;
          } }) === 'ika-100');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.do(null, { d: function d() {
            return 700;
          } }) === 'ika-700');
      });
    });

    describe('Qo', function () {
      it('returns ordinal result of Q formatter', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Qo(null, { Q: function Q() {
            return 1;
          } }) === 'ika-1');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Qo(null, { Q: function Q() {
            return 2;
          } }) === 'ika-2');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Qo(null, { Q: function Q() {
            return 3;
          } }) === 'ika-3');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Qo(null, { Q: function Q() {
            return 10;
          } }) === 'ika-10');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Qo(null, { Q: function Q() {
            return 20;
          } }) === 'ika-20');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Qo(null, { Q: function Q() {
            return 30;
          } }) === 'ika-30');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Qo(null, { Q: function Q() {
            return 100;
          } }) === 'ika-100');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Qo(null, { Q: function Q() {
            return 700;
          } }) === 'ika-700');
      });
    });

    describe('Wo', function () {
      it('returns ordinal result of W formatter', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Wo(null, { W: function W() {
            return 1;
          } }) === 'ika-1');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Wo(null, { W: function W() {
            return 2;
          } }) === 'ika-2');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Wo(null, { W: function W() {
            return 3;
          } }) === 'ika-3');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Wo(null, { W: function W() {
            return 10;
          } }) === 'ika-10');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Wo(null, { W: function W() {
            return 20;
          } }) === 'ika-20');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Wo(null, { W: function W() {
            return 30;
          } }) === 'ika-30');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Wo(null, { W: function W() {
            return 100;
          } }) === 'ika-100');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Wo(null, { W: function W() {
            return 700;
          } }) === 'ika-700');
      });
    });
  });

  describe('formattingTokensRegExp property', function () {
    it('is an instance of RegExp', function () {
      (0, _powerAssert2.default)((0, _.buildFormatLocale)().formattingTokensRegExp instanceof RegExp);
    });
  });
});