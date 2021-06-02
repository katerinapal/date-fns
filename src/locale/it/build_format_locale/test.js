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

describe('it locale > buildFormatLocale', function () {
  it('returns an object', function () {
    assert(_typeof(buildFormatLocale()) === 'object');
  });

  describe('formatters property', function () {
    it('is an object', function () {
      assert(_typeof(buildFormatLocale().formatters) === 'object');
    });

    describe('MMM', function () {
      it('returns the correct string for January', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 0)) === 'gen');
      });

      it('returns the correct string for February', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 1)) === 'feb');
      });

      it('returns the correct string for March', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 2)) === 'mar');
      });

      it('returns the correct string for April', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2015, 3)) === 'apr');
      });

      it('returns the correct string for May', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 4)) === 'mag');
      });

      it('returns the correct string for June', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 5)) === 'giu');
      });

      it('returns the correct string for July', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 6)) === 'lug');
      });

      it('returns the correct string for August', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 7)) === 'ago');
      });

      it('returns the correct string for September', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 8)) === 'set');
      });

      it('returns the correct string for October', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 9)) === 'ott');
      });

      it('returns the correct string for November', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 10)) === 'nov');
      });

      it('returns the correct string for December', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 11)) === 'dic');
      });
    });

    describe('MMMM', function () {
      it('returns the correct string for January', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 0)) === 'gennaio');
      });

      it('returns the correct string for February', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 1)) === 'febbraio');
      });

      it('returns the correct string for March', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 2)) === 'marzo');
      });

      it('returns the correct string for April', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2015, 3)) === 'aprile');
      });

      it('returns the correct string for May', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 4)) === 'maggio');
      });

      it('returns the correct string for June', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 5)) === 'giugno');
      });

      it('returns the correct string for July', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 6)) === 'luglio');
      });

      it('returns the correct string for August', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 7)) === 'agosto');
      });

      it('returns the correct string for September', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 8)) === 'settembre');
      });

      it('returns the correct string for October', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 9)) === 'ottobre');
      });

      it('returns the correct string for November', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 10)) === 'novembre');
      });

      it('returns the correct string for December', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 11)) === 'dicembre');
      });
    });

    describe('dd', function () {
      it('returns the correct string for Sunday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 7)) === 'do');
      });

      it('returns the correct string for Monday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 1)) === 'lu');
      });

      it('returns the correct string for Tuesday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 2)) === 'ma');
      });

      it('returns the correct string for Wednesday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 3)) === 'me');
      });

      it('returns the correct string for Thursday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 4)) === 'gi');
      });

      it('returns the correct string for Friday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 5)) === 've');
      });

      it('returns the correct string for Saturday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 6)) === 'sa');
      });
    });

    describe('ddd', function () {
      it('returns the correct string for Sunday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 7)) === 'dom');
      });

      it('returns the correct string for Monday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 1)) === 'lun');
      });

      it('returns the correct string for Tuesday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 2)) === 'mar');
      });

      it('returns the correct string for Wednesday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 3)) === 'mer');
      });

      it('returns the correct string for Thursday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 4)) === 'gio');
      });

      it('returns the correct string for Friday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 5)) === 'ven');
      });

      it('returns the correct string for Saturday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 6)) === 'sab');
      });
    });

    describe('dddd', function () {
      it('returns the correct string for Sunday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 7)) === 'domenica');
      });

      it('returns the correct string for Monday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 1)) === 'lunedì');
      });

      it('returns the correct string for Tuesday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 2)) === 'martedì');
      });

      it('returns the correct string for Wednesday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 3)) === 'mercoledì');
      });

      it('returns the correct string for Thursday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 4)) === 'giovedì');
      });

      it('returns the correct string for Friday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 5)) === 'venerdì');
      });

      it('returns the correct string for Saturday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 6)) === 'sabato');
      });
    });

    describe('A', function () {
      it('returns the correct string for 1-11 a.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 1)) === 'AM');
      });

      it('returns the correct string for 12 a.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 0)) === 'AM');
      });

      it('returns the correct string for 1-11 p.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 13)) === 'PM');
      });

      it('returns the correct string for 12 p.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 12)) === 'PM');
      });
    });

    describe('a', function () {
      it('returns the correct string for 1-11 a.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 1)) === 'am');
      });

      it('returns the correct string for 12 a.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 0)) === 'am');
      });

      it('returns the correct string for 1-11 p.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 13)) === 'pm');
      });

      it('returns the correct string for 12 p.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 12)) === 'pm');
      });
    });

    describe('aa', function () {
      it('returns the correct string for 1-11 a.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 1)) === 'a.m.');
      });

      it('returns the correct string for 12 a.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 0)) === 'a.m.');
      });

      it('returns the correct string for 1-11 p.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 13)) === 'p.m.');
      });

      it('returns the correct string for 12 p.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 12)) === 'p.m.');
      });
    });

    describe('Mo', function () {
      it('returns ordinal result of M formatter', function () {
        assert(buildFormatLocale().formatters.Mo(null, { M: function M() {
            return 1;
          } }) === '1º');
        assert(buildFormatLocale().formatters.Mo(null, { M: function M() {
            return 2;
          } }) === '2º');
        assert(buildFormatLocale().formatters.Mo(null, { M: function M() {
            return 3;
          } }) === '3º');
        assert(buildFormatLocale().formatters.Mo(null, { M: function M() {
            return 11;
          } }) === '11º');
        assert(buildFormatLocale().formatters.Mo(null, { M: function M() {
            return 101;
          } }) === '101º');
        assert(buildFormatLocale().formatters.Mo(null, { M: function M() {
            return 111;
          } }) === '111º');
      });
    });

    describe('Do', function () {
      it('returns ordinal result of D formatter', function () {
        assert(buildFormatLocale().formatters.Do(null, { D: function D() {
            return 1;
          } }) === '1º');
        assert(buildFormatLocale().formatters.Do(null, { D: function D() {
            return 2;
          } }) === '2º');
        assert(buildFormatLocale().formatters.Do(null, { D: function D() {
            return 3;
          } }) === '3º');
        assert(buildFormatLocale().formatters.Do(null, { D: function D() {
            return 11;
          } }) === '11º');
        assert(buildFormatLocale().formatters.Do(null, { D: function D() {
            return 101;
          } }) === '101º');
        assert(buildFormatLocale().formatters.Do(null, { D: function D() {
            return 111;
          } }) === '111º');
      });
    });

    describe('DDDo', function () {
      it('returns ordinal result of DDD formatter', function () {
        assert(buildFormatLocale().formatters.DDDo(null, { DDD: function DDD() {
            return 1;
          } }) === '1º');
        assert(buildFormatLocale().formatters.DDDo(null, { DDD: function DDD() {
            return 2;
          } }) === '2º');
        assert(buildFormatLocale().formatters.DDDo(null, { DDD: function DDD() {
            return 3;
          } }) === '3º');
        assert(buildFormatLocale().formatters.DDDo(null, { DDD: function DDD() {
            return 11;
          } }) === '11º');
        assert(buildFormatLocale().formatters.DDDo(null, { DDD: function DDD() {
            return 101;
          } }) === '101º');
        assert(buildFormatLocale().formatters.DDDo(null, { DDD: function DDD() {
            return 111;
          } }) === '111º');
      });
    });

    describe('do', function () {
      it('returns ordinal result of d formatter', function () {
        assert(buildFormatLocale().formatters.do(null, { d: function d() {
            return 1;
          } }) === '1º');
        assert(buildFormatLocale().formatters.do(null, { d: function d() {
            return 2;
          } }) === '2º');
        assert(buildFormatLocale().formatters.do(null, { d: function d() {
            return 3;
          } }) === '3º');
        assert(buildFormatLocale().formatters.do(null, { d: function d() {
            return 11;
          } }) === '11º');
        assert(buildFormatLocale().formatters.do(null, { d: function d() {
            return 101;
          } }) === '101º');
        assert(buildFormatLocale().formatters.do(null, { d: function d() {
            return 111;
          } }) === '111º');
      });
    });

    describe('Qo', function () {
      it('returns ordinal result of Q formatter', function () {
        assert(buildFormatLocale().formatters.Qo(null, { Q: function Q() {
            return 1;
          } }) === '1º');
        assert(buildFormatLocale().formatters.Qo(null, { Q: function Q() {
            return 2;
          } }) === '2º');
        assert(buildFormatLocale().formatters.Qo(null, { Q: function Q() {
            return 3;
          } }) === '3º');
        assert(buildFormatLocale().formatters.Qo(null, { Q: function Q() {
            return 11;
          } }) === '11º');
        assert(buildFormatLocale().formatters.Qo(null, { Q: function Q() {
            return 101;
          } }) === '101º');
        assert(buildFormatLocale().formatters.Qo(null, { Q: function Q() {
            return 111;
          } }) === '111º');
      });
    });

    describe('Wo', function () {
      it('returns ordinal result of W formatter', function () {
        assert(buildFormatLocale().formatters.Wo(null, { W: function W() {
            return 1;
          } }) === '1º');
        assert(buildFormatLocale().formatters.Wo(null, { W: function W() {
            return 2;
          } }) === '2º');
        assert(buildFormatLocale().formatters.Wo(null, { W: function W() {
            return 3;
          } }) === '3º');
        assert(buildFormatLocale().formatters.Wo(null, { W: function W() {
            return 11;
          } }) === '11º');
        assert(buildFormatLocale().formatters.Wo(null, { W: function W() {
            return 101;
          } }) === '101º');
        assert(buildFormatLocale().formatters.Wo(null, { W: function W() {
            return 111;
          } }) === '111º');
      });
    });
  });

  describe('formattingTokensRegExp property', function () {
    it('is an instance of RegExp', function () {
      assert(buildFormatLocale().formattingTokensRegExp instanceof RegExp);
    });
  });
});