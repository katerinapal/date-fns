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

describe('ca locale > buildFormatLocale', function () {
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
        assert(buildFormatLocale().formatters.MMM(new Date(2015, 3)) === 'abr');
      });

      it('returns the correct string for May', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 4)) === 'mai');
      });

      it('returns the correct string for June', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 5)) === 'jun');
      });

      it('returns the correct string for July', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 6)) === 'jul');
      });

      it('returns the correct string for August', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 7)) === 'ago');
      });

      it('returns the correct string for September', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 8)) === 'set');
      });

      it('returns the correct string for October', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 9)) === 'oct');
      });

      it('returns the correct string for November', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 10)) === 'nov');
      });

      it('returns the correct string for December', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 11)) === 'des');
      });
    });

    describe('MMMM', function () {
      it('returns the correct string for January', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 0)) === 'gener');
      });

      it('returns the correct string for February', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 1)) === 'febrer');
      });

      it('returns the correct string for March', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 2)) === 'març');
      });

      it('returns the correct string for April', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2015, 3)) === 'abril');
      });

      it('returns the correct string for May', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 4)) === 'maig');
      });

      it('returns the correct string for June', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 5)) === 'juny');
      });

      it('returns the correct string for July', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 6)) === 'juliol');
      });

      it('returns the correct string for August', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 7)) === 'agost');
      });

      it('returns the correct string for September', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 8)) === 'setembre');
      });

      it('returns the correct string for October', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 9)) === 'octobre');
      });

      it('returns the correct string for November', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 10)) === 'novembre');
      });

      it('returns the correct string for December', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 11)) === 'desembre');
      });
    });

    describe('dd', function () {
      it('returns the correct string for Sunday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 7)) === 'dg');
      });

      it('returns the correct string for Monday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 1)) === 'dl');
      });

      it('returns the correct string for Tuesday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 2)) === 'dt');
      });

      it('returns the correct string for Wednesday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 3)) === 'dc');
      });

      it('returns the correct string for Thursday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 4)) === 'dj');
      });

      it('returns the correct string for Friday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 5)) === 'dv');
      });

      it('returns the correct string for Saturday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 6)) === 'ds');
      });
    });

    describe('ddd', function () {
      it('returns the correct string for Sunday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 7)) === 'dge');
      });

      it('returns the correct string for Monday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 1)) === 'dls');
      });

      it('returns the correct string for Tuesday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 2)) === 'dts');
      });

      it('returns the correct string for Wednesday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 3)) === 'dcs');
      });

      it('returns the correct string for Thursday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 4)) === 'djs');
      });

      it('returns the correct string for Friday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 5)) === 'dvs');
      });

      it('returns the correct string for Saturday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 6)) === 'dss');
      });
    });

    describe('dddd', function () {
      it('returns the correct string for Sunday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 7)) === 'diumenge');
      });

      it('returns the correct string for Monday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 1)) === 'dilluns');
      });

      it('returns the correct string for Tuesday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 2)) === 'dimarts');
      });

      it('returns the correct string for Wednesday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 3)) === 'dimecres');
      });

      it('returns the correct string for Thursday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 4)) === 'dijous');
      });

      it('returns the correct string for Friday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 5)) === 'divendres');
      });

      it('returns the correct string for Saturday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 6)) === 'dissabte');
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
          } }) === '1r');
        assert(buildFormatLocale().formatters.Mo(null, { M: function M() {
            return 2;
          } }) === '2n');
        assert(buildFormatLocale().formatters.Mo(null, { M: function M() {
            return 3;
          } }) === '3r');
        assert(buildFormatLocale().formatters.Mo(null, { M: function M() {
            return 4;
          } }) === '4t');
        assert(buildFormatLocale().formatters.Mo(null, { M: function M() {
            return 11;
          } }) === '11è');
        assert(buildFormatLocale().formatters.Mo(null, { M: function M() {
            return 101;
          } }) === '101è');
        assert(buildFormatLocale().formatters.Mo(null, { M: function M() {
            return 111;
          } }) === '111è');
      });
    });

    describe('Do', function () {
      it('returns ordinal result of D formatter', function () {
        assert(buildFormatLocale().formatters.Do(null, { D: function D() {
            return 1;
          } }) === '1r');
        assert(buildFormatLocale().formatters.Do(null, { D: function D() {
            return 2;
          } }) === '2n');
        assert(buildFormatLocale().formatters.Do(null, { D: function D() {
            return 3;
          } }) === '3r');
        assert(buildFormatLocale().formatters.Do(null, { D: function D() {
            return 4;
          } }) === '4t');
        assert(buildFormatLocale().formatters.Do(null, { D: function D() {
            return 11;
          } }) === '11è');
        assert(buildFormatLocale().formatters.Do(null, { D: function D() {
            return 101;
          } }) === '101è');
        assert(buildFormatLocale().formatters.Do(null, { D: function D() {
            return 111;
          } }) === '111è');
      });
    });

    describe('DDDo', function () {
      it('returns ordinal result of DDD formatter', function () {
        assert(buildFormatLocale().formatters.DDDo(null, { DDD: function DDD() {
            return 1;
          } }) === '1r');
        assert(buildFormatLocale().formatters.DDDo(null, { DDD: function DDD() {
            return 2;
          } }) === '2n');
        assert(buildFormatLocale().formatters.DDDo(null, { DDD: function DDD() {
            return 3;
          } }) === '3r');
        assert(buildFormatLocale().formatters.DDDo(null, { DDD: function DDD() {
            return 4;
          } }) === '4t');
        assert(buildFormatLocale().formatters.DDDo(null, { DDD: function DDD() {
            return 11;
          } }) === '11è');
        assert(buildFormatLocale().formatters.DDDo(null, { DDD: function DDD() {
            return 101;
          } }) === '101è');
        assert(buildFormatLocale().formatters.DDDo(null, { DDD: function DDD() {
            return 111;
          } }) === '111è');
      });
    });

    describe('do', function () {
      it('returns ordinal result of d formatter', function () {
        assert(buildFormatLocale().formatters.do(null, { d: function d() {
            return 1;
          } }) === '1r');
        assert(buildFormatLocale().formatters.do(null, { d: function d() {
            return 2;
          } }) === '2n');
        assert(buildFormatLocale().formatters.do(null, { d: function d() {
            return 3;
          } }) === '3r');
        assert(buildFormatLocale().formatters.do(null, { d: function d() {
            return 4;
          } }) === '4t');
        assert(buildFormatLocale().formatters.do(null, { d: function d() {
            return 11;
          } }) === '11è');
        assert(buildFormatLocale().formatters.do(null, { d: function d() {
            return 101;
          } }) === '101è');
        assert(buildFormatLocale().formatters.do(null, { d: function d() {
            return 111;
          } }) === '111è');
      });
    });

    describe('Qo', function () {
      it('returns ordinal result of Q formatter', function () {
        assert(buildFormatLocale().formatters.Qo(null, { Q: function Q() {
            return 1;
          } }) === '1r');
        assert(buildFormatLocale().formatters.Qo(null, { Q: function Q() {
            return 2;
          } }) === '2n');
        assert(buildFormatLocale().formatters.Qo(null, { Q: function Q() {
            return 3;
          } }) === '3r');
        assert(buildFormatLocale().formatters.Qo(null, { Q: function Q() {
            return 4;
          } }) === '4t');
        assert(buildFormatLocale().formatters.Qo(null, { Q: function Q() {
            return 11;
          } }) === '11è');
        assert(buildFormatLocale().formatters.Qo(null, { Q: function Q() {
            return 101;
          } }) === '101è');
        assert(buildFormatLocale().formatters.Qo(null, { Q: function Q() {
            return 111;
          } }) === '111è');
      });
    });

    describe('Wo', function () {
      it('returns ordinal result of W formatter', function () {
        assert(buildFormatLocale().formatters.Wo(null, { W: function W() {
            return 1;
          } }) === '1r');
        assert(buildFormatLocale().formatters.Wo(null, { W: function W() {
            return 2;
          } }) === '2n');
        assert(buildFormatLocale().formatters.Wo(null, { W: function W() {
            return 3;
          } }) === '3r');
        assert(buildFormatLocale().formatters.Wo(null, { W: function W() {
            return 4;
          } }) === '4t');
        assert(buildFormatLocale().formatters.Wo(null, { W: function W() {
            return 11;
          } }) === '11è');
        assert(buildFormatLocale().formatters.Wo(null, { W: function W() {
            return 101;
          } }) === '101è');
        assert(buildFormatLocale().formatters.Wo(null, { W: function W() {
            return 111;
          } }) === '111è');
      });
    });
  });

  describe('formattingTokensRegExp property', function () {
    it('is an instance of RegExp', function () {
      assert(buildFormatLocale().formattingTokensRegExp instanceof RegExp);
    });
  });
});