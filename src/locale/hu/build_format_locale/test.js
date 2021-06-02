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

describe('en locale > buildFormatLocale', function () {
  it('returns an object', function () {
    assert(_typeof(buildFormatLocale()) === 'object');
  });

  describe('formatters property', function () {
    it('is an object', function () {
      assert(_typeof(buildFormatLocale().formatters) === 'object');
    });

    describe('MMM', function () {
      it('returns the correct string for January', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 0)) === 'Jan');
      });

      it('returns the correct string for February', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 1)) === 'Feb');
      });

      it('returns the correct string for March', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 2)) === 'Már');
      });

      it('returns the correct string for April', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2015, 3)) === 'Ápr');
      });

      it('returns the correct string for May', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 4)) === 'Máj');
      });

      it('returns the correct string for June', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 5)) === 'Jún');
      });

      it('returns the correct string for July', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 6)) === 'Júl');
      });

      it('returns the correct string for August', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 7)) === 'Aug');
      });

      it('returns the correct string for September', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 8)) === 'Sze');
      });

      it('returns the correct string for October', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 9)) === 'Okt');
      });

      it('returns the correct string for November', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 10)) === 'Nov');
      });

      it('returns the correct string for December', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 11)) === 'Dec');
      });
    });

    describe('MMMM', function () {
      it('returns the correct string for January', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 0)) === 'Január');
      });

      it('returns the correct string for February', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 1)) === 'Február');
      });

      it('returns the correct string for March', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 2)) === 'Március');
      });

      it('returns the correct string for April', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2015, 3)) === 'Április');
      });

      it('returns the correct string for May', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 4)) === 'Május');
      });

      it('returns the correct string for June', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 5)) === 'Június');
      });

      it('returns the correct string for July', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 6)) === 'Július');
      });

      it('returns the correct string for August', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 7)) === 'Augusztus');
      });

      it('returns the correct string for September', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 8)) === 'Szeptember');
      });

      it('returns the correct string for October', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 9)) === 'Október');
      });

      it('returns the correct string for November', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 10)) === 'November');
      });

      it('returns the correct string for December', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 11)) === 'December');
      });
    });

    describe('dd', function () {
      it('returns the correct string for Sunday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 7)) === 'Va');
      });

      it('returns the correct string for Monday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 1)) === 'Hé');
      });

      it('returns the correct string for Tuesday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 2)) === 'Ke');
      });

      it('returns the correct string for Wednesday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 3)) === 'Sze');
      });

      it('returns the correct string for Thursday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 4)) === 'Cs');
      });

      it('returns the correct string for Friday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 5)) === 'Pé');
      });

      it('returns the correct string for Saturday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 6)) === 'Szo');
      });
    });

    describe('ddd', function () {
      it('returns the correct string for Sunday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 7)) === 'Vas');
      });

      it('returns the correct string for Monday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 1)) === 'Hét');
      });

      it('returns the correct string for Tuesday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 2)) === 'Ked');
      });

      it('returns the correct string for Wednesday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 3)) === 'Sze');
      });

      it('returns the correct string for Thursday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 4)) === 'Csü');
      });

      it('returns the correct string for Friday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 5)) === 'Pén');
      });

      it('returns the correct string for Saturday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 6)) === 'Szo');
      });
    });

    describe('dddd', function () {
      it('returns the correct string for Sunday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 7)) === 'Vasárnap');
      });

      it('returns the correct string for Monday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 1)) === 'Hétfő');
      });

      it('returns the correct string for Tuesday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 2)) === 'Kedd');
      });

      it('returns the correct string for Wednesday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 3)) === 'Szerda');
      });

      it('returns the correct string for Thursday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 4)) === 'Csütörtök');
      });

      it('returns the correct string for Friday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 5)) === 'Péntek');
      });

      it('returns the correct string for Saturday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 6)) === 'Szombat');
      });
    });

    describe('A', function () {
      it('returns the correct string for 1-11 a.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 1)) === 'DE');
      });

      it('returns the correct string for 12 a.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 0)) === 'DE');
      });

      it('returns the correct string for 1-11 p.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 13)) === 'DU');
      });

      it('returns the correct string for 12 p.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 12)) === 'DU');
      });
    });

    describe('a', function () {
      it('returns the correct string for 1-11 a.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 1)) === 'de');
      });

      it('returns the correct string for 12 a.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 0)) === 'de');
      });

      it('returns the correct string for 1-11 p.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 13)) === 'du');
      });

      it('returns the correct string for 12 p.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 12)) === 'du');
      });
    });

    describe('aa', function () {
      it('returns the correct string for 1-11 a.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 1)) === 'délelőtt');
      });

      it('returns the correct string for 12 a.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 0)) === 'délelőtt');
      });

      it('returns the correct string for 1-11 p.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 13)) === 'délután');
      });

      it('returns the correct string for 12 p.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 12)) === 'délután');
      });
    });

    describe('Mo', function () {
      it('returns ordinal result of M formatter', function () {
        assert(buildFormatLocale().formatters.Mo(null, { M: function M() {
            return 1;
          } }) === '1st');
        assert(buildFormatLocale().formatters.Mo(null, { M: function M() {
            return 2;
          } }) === '2nd');
        assert(buildFormatLocale().formatters.Mo(null, { M: function M() {
            return 3;
          } }) === '3rd');
        assert(buildFormatLocale().formatters.Mo(null, { M: function M() {
            return 11;
          } }) === '11th');
        assert(buildFormatLocale().formatters.Mo(null, { M: function M() {
            return 101;
          } }) === '101st');
        assert(buildFormatLocale().formatters.Mo(null, { M: function M() {
            return 111;
          } }) === '111th');
      });
    });

    describe('Do', function () {
      it('returns ordinal result of D formatter', function () {
        assert(buildFormatLocale().formatters.Do(null, { D: function D() {
            return 1;
          } }) === '1st');
        assert(buildFormatLocale().formatters.Do(null, { D: function D() {
            return 2;
          } }) === '2nd');
        assert(buildFormatLocale().formatters.Do(null, { D: function D() {
            return 3;
          } }) === '3rd');
        assert(buildFormatLocale().formatters.Do(null, { D: function D() {
            return 11;
          } }) === '11th');
        assert(buildFormatLocale().formatters.Do(null, { D: function D() {
            return 101;
          } }) === '101st');
        assert(buildFormatLocale().formatters.Do(null, { D: function D() {
            return 111;
          } }) === '111th');
      });
    });

    describe('DDDo', function () {
      it('returns ordinal result of DDD formatter', function () {
        assert(buildFormatLocale().formatters.DDDo(null, { DDD: function DDD() {
            return 1;
          } }) === '1st');
        assert(buildFormatLocale().formatters.DDDo(null, { DDD: function DDD() {
            return 2;
          } }) === '2nd');
        assert(buildFormatLocale().formatters.DDDo(null, { DDD: function DDD() {
            return 3;
          } }) === '3rd');
        assert(buildFormatLocale().formatters.DDDo(null, { DDD: function DDD() {
            return 11;
          } }) === '11th');
        assert(buildFormatLocale().formatters.DDDo(null, { DDD: function DDD() {
            return 101;
          } }) === '101st');
        assert(buildFormatLocale().formatters.DDDo(null, { DDD: function DDD() {
            return 111;
          } }) === '111th');
      });
    });

    describe('do', function () {
      it('returns ordinal result of d formatter', function () {
        assert(buildFormatLocale().formatters.do(null, { d: function d() {
            return 1;
          } }) === '1st');
        assert(buildFormatLocale().formatters.do(null, { d: function d() {
            return 2;
          } }) === '2nd');
        assert(buildFormatLocale().formatters.do(null, { d: function d() {
            return 3;
          } }) === '3rd');
        assert(buildFormatLocale().formatters.do(null, { d: function d() {
            return 11;
          } }) === '11th');
        assert(buildFormatLocale().formatters.do(null, { d: function d() {
            return 101;
          } }) === '101st');
        assert(buildFormatLocale().formatters.do(null, { d: function d() {
            return 111;
          } }) === '111th');
      });
    });

    describe('Qo', function () {
      it('returns ordinal result of Q formatter', function () {
        assert(buildFormatLocale().formatters.Qo(null, { Q: function Q() {
            return 1;
          } }) === '1st');
        assert(buildFormatLocale().formatters.Qo(null, { Q: function Q() {
            return 2;
          } }) === '2nd');
        assert(buildFormatLocale().formatters.Qo(null, { Q: function Q() {
            return 3;
          } }) === '3rd');
        assert(buildFormatLocale().formatters.Qo(null, { Q: function Q() {
            return 11;
          } }) === '11th');
        assert(buildFormatLocale().formatters.Qo(null, { Q: function Q() {
            return 101;
          } }) === '101st');
        assert(buildFormatLocale().formatters.Qo(null, { Q: function Q() {
            return 111;
          } }) === '111th');
      });
    });

    describe('Wo', function () {
      it('returns ordinal result of W formatter', function () {
        assert(buildFormatLocale().formatters.Wo(null, { W: function W() {
            return 1;
          } }) === '1st');
        assert(buildFormatLocale().formatters.Wo(null, { W: function W() {
            return 2;
          } }) === '2nd');
        assert(buildFormatLocale().formatters.Wo(null, { W: function W() {
            return 3;
          } }) === '3rd');
        assert(buildFormatLocale().formatters.Wo(null, { W: function W() {
            return 11;
          } }) === '11th');
        assert(buildFormatLocale().formatters.Wo(null, { W: function W() {
            return 101;
          } }) === '101st');
        assert(buildFormatLocale().formatters.Wo(null, { W: function W() {
            return 111;
          } }) === '111th');
      });
    });
  });

  describe('formattingTokensRegExp property', function () {
    it('is an instance of RegExp', function () {
      assert(buildFormatLocale().formattingTokensRegExp instanceof RegExp);
    });
  });
});