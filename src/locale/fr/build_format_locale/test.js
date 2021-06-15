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

describe('fr locale > buildFormatLocale', function () {
  it('returns an object', function () {
    (0, _powerAssert2.default)(_typeof((0, _.buildFormatLocale)()) === 'object');
  });

  describe('formatters property', function () {
    it('is an object', function () {
      (0, _powerAssert2.default)(_typeof((0, _.buildFormatLocale)().formatters) === 'object');
    });

    describe('MMM', function () {
      it('returns the correct string for January', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 0)) === 'janv.');
      });

      it('returns the correct string for February', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 1)) === 'févr.');
      });

      it('returns the correct string for March', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 2)) === 'mars');
      });

      it('returns the correct string for April', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2015, 3)) === 'avr.');
      });

      it('returns the correct string for May', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 4)) === 'mai');
      });

      it('returns the correct string for June', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 5)) === 'juin');
      });

      it('returns the correct string for July', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 6)) === 'juill.');
      });

      it('returns the correct string for August', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 7)) === 'août');
      });

      it('returns the correct string for September', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 8)) === 'sept.');
      });

      it('returns the correct string for October', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 9)) === 'oct.');
      });

      it('returns the correct string for November', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 10)) === 'nov.');
      });

      it('returns the correct string for December', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(new Date(2016, 11)) === 'déc.');
      });
    });

    describe('MMMM', function () {
      it('returns the correct string for January', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 0)) === 'janvier');
      });

      it('returns the correct string for February', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 1)) === 'février');
      });

      it('returns the correct string for March', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 2)) === 'mars');
      });

      it('returns the correct string for April', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2015, 3)) === 'avril');
      });

      it('returns the correct string for May', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 4)) === 'mai');
      });

      it('returns the correct string for June', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 5)) === 'juin');
      });

      it('returns the correct string for July', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 6)) === 'juillet');
      });

      it('returns the correct string for August', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 7)) === 'août');
      });

      it('returns the correct string for September', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 8)) === 'septembre');
      });

      it('returns the correct string for October', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 9)) === 'octobre');
      });

      it('returns the correct string for November', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 10)) === 'novembre');
      });

      it('returns the correct string for December', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(new Date(2016, 11)) === 'décembre');
      });
    });

    describe('dd', function () {
      it('returns the correct string for Sunday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dd(new Date(2016, 1 /* Feb */, 7)) === 'di');
      });

      it('returns the correct string for Monday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dd(new Date(2016, 1 /* Feb */, 1)) === 'lu');
      });

      it('returns the correct string for Tuesday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dd(new Date(2016, 1 /* Feb */, 2)) === 'ma');
      });

      it('returns the correct string for Wednesday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dd(new Date(2016, 1 /* Feb */, 3)) === 'me');
      });

      it('returns the correct string for Thursday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dd(new Date(2016, 1 /* Feb */, 4)) === 'je');
      });

      it('returns the correct string for Friday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dd(new Date(2016, 1 /* Feb */, 5)) === 've');
      });

      it('returns the correct string for Saturday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dd(new Date(2016, 1 /* Feb */, 6)) === 'sa');
      });
    });

    describe('ddd', function () {
      it('returns the correct string for Sunday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.ddd(new Date(2016, 1 /* Feb */, 7)) === 'dim.');
      });

      it('returns the correct string for Monday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.ddd(new Date(2016, 1 /* Feb */, 1)) === 'lun.');
      });

      it('returns the correct string for Tuesday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.ddd(new Date(2016, 1 /* Feb */, 2)) === 'mar.');
      });

      it('returns the correct string for Wednesday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.ddd(new Date(2016, 1 /* Feb */, 3)) === 'mer.');
      });

      it('returns the correct string for Thursday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.ddd(new Date(2016, 1 /* Feb */, 4)) === 'jeu.');
      });

      it('returns the correct string for Friday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.ddd(new Date(2016, 1 /* Feb */, 5)) === 'ven.');
      });

      it('returns the correct string for Saturday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.ddd(new Date(2016, 1 /* Feb */, 6)) === 'sam.');
      });
    });

    describe('dddd', function () {
      it('returns the correct string for Sunday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dddd(new Date(2016, 1 /* Feb */, 7)) === 'dimanche');
      });

      it('returns the correct string for Monday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dddd(new Date(2016, 1 /* Feb */, 1)) === 'lundi');
      });

      it('returns the correct string for Tuesday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dddd(new Date(2016, 1 /* Feb */, 2)) === 'mardi');
      });

      it('returns the correct string for Wednesday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dddd(new Date(2016, 1 /* Feb */, 3)) === 'mercredi');
      });

      it('returns the correct string for Thursday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dddd(new Date(2016, 1 /* Feb */, 4)) === 'jeudi');
      });

      it('returns the correct string for Friday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dddd(new Date(2016, 1 /* Feb */, 5)) === 'vendredi');
      });

      it('returns the correct string for Saturday', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.dddd(new Date(2016, 1 /* Feb */, 6)) === 'samedi');
      });
    });

    describe('A', function () {
      it('returns the correct string for 1-11 a.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.A(new Date(2016, 1 /* Feb */, 11, 1)) === 'AM');
      });

      it('returns the correct string for 12 a.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.A(new Date(2016, 1 /* Feb */, 11, 0)) === 'AM');
      });

      it('returns the correct string for 1-11 p.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.A(new Date(2016, 1 /* Feb */, 11, 13)) === 'PM');
      });

      it('returns the correct string for 12 p.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.A(new Date(2016, 1 /* Feb */, 11, 12)) === 'PM');
      });
    });

    describe('a', function () {
      it('returns the correct string for 1-11 a.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.a(new Date(2016, 1 /* Feb */, 11, 1)) === 'am');
      });

      it('returns the correct string for 12 a.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.a(new Date(2016, 1 /* Feb */, 11, 0)) === 'am');
      });

      it('returns the correct string for 1-11 p.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.a(new Date(2016, 1 /* Feb */, 11, 13)) === 'pm');
      });

      it('returns the correct string for 12 p.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.a(new Date(2016, 1 /* Feb */, 11, 12)) === 'pm');
      });
    });

    describe('aa', function () {
      it('returns the correct string for 12 a.m. to 12 p.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.aa(new Date(2016, 1 /* Feb */, 11, 1)) === 'du matin');
      });

      it('returns the correct string for 1-4 p.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.aa(new Date(2016, 1 /* Feb */, 11, 13)) === 'de l’après-midi');
      });

      it('returns the correct string for 5-11 p.m.', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.aa(new Date(2016, 1 /* Feb */, 11, 17)) === 'du soir');
      });
    });

    describe('Mo', function () {
      it('returns ordinal result of M formatter', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Mo(null, { M: function M() {
            return 1;
          } }) === '1er');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Mo(null, { M: function M() {
            return 2;
          } }) === '2e');
      });
    });

    describe('Do', function () {
      it('returns ordinal result of D formatter', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Do(null, { D: function D() {
            return 1;
          } }) === '1er');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Do(null, { D: function D() {
            return 2;
          } }) === '2e');
      });
    });

    describe('DDDo', function () {
      it('returns ordinal result of DDD formatter', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.DDDo(null, { DDD: function DDD() {
            return 1;
          } }) === '1er');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.DDDo(null, { DDD: function DDD() {
            return 2;
          } }) === '2e');
      });
    });

    describe('do', function () {
      it('returns ordinal result of d formatter', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.do(null, { d: function d() {
            return 1;
          } }) === '1er');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.do(null, { d: function d() {
            return 2;
          } }) === '2e');
      });
    });

    describe('Qo', function () {
      it('returns ordinal result of Q formatter', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Qo(null, { Q: function Q() {
            return 1;
          } }) === '1er');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Qo(null, { Q: function Q() {
            return 2;
          } }) === '2e');
      });
    });

    describe('Wo', function () {
      it('returns ordinal result of W formatter', function () {
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Wo(null, { W: function W() {
            return 1;
          } }) === '1re');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Wo(null, { W: function W() {
            return 2;
          } }) === '2e');
      });
    });

    describe('Do MMM & Do MMMM', function () {
      it('returns ordinal for day of month 1', function () {
        var january1st = new Date(2017, 0 /* Jan */, 1);
        var formatters = {
          D: function D() {
            return 1;
          }
        };
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Do(january1st, formatters) === '1er');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(january1st, formatters) === 'janv.');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters['Do MMM'](january1st, formatters) === '1er janv.');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(january1st, formatters) === 'janvier');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters['Do MMMM'](january1st, formatters) === '1er janvier');
      });

      it('returns cardinal for day of month other than 1', function () {
        var january2nd = new Date(2017, 0 /* Jan */, 2);
        var formatters = {
          D: function D() {
            return 2;
          }
        };
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.Do(january2nd, formatters) === '2e');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMM(january2nd, formatters) === 'janv.');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters['Do MMM'](january2nd, formatters) === '2 janv.');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters.MMMM(january2nd, formatters) === 'janvier');
        (0, _powerAssert2.default)((0, _.buildFormatLocale)().formatters['Do MMMM'](january2nd, formatters) === '2 janvier');
      });
    });
  });

  describe('formattingTokensRegExp property', function () {
    it('is an instance of RegExp', function () {
      (0, _powerAssert2.default)((0, _.buildFormatLocale)().formattingTokensRegExp instanceof RegExp);
    });
  });
});