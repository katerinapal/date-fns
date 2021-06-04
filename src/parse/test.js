"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('parse', function () {
  describe('date argument', function () {
    it('returns a clone of the given date', function () {
      var date = new Date(2016, 0, 1);
      var dateClone = (0, _.parse)(date);
      dateClone.setFullYear(2015);
      _powerAssert2.default.deepEqual(date, new Date(2016, 0, 1));
    });
  });

  describe('timestamp argument', function () {
    it('creates a date from the timestamp', function () {
      var timestamp = new Date(2016, 0, 1, 23, 30, 45, 123).getTime();
      var result = (0, _.parse)(timestamp);
      _powerAssert2.default.deepEqual(result, new Date(2016, 0, 1, 23, 30, 45, 123));
    });
  });

  describe('string argument', function () {
    describe('centuries', function () {
      it('parses YY', function () {
        var result = (0, _.parse)('20');
        _powerAssert2.default.deepEqual(result, new Date(2000, 0 /* Jan */, 1));
      });
    });

    describe('years', function () {
      it('parses YYYY', function () {
        var result = (0, _.parse)('2014');
        _powerAssert2.default.deepEqual(result, new Date(2014, 0 /* Jan */, 1));
      });
    });

    describe('months', function () {
      it('parses YYYY-MM', function () {
        var result = (0, _.parse)('2014-02');
        _powerAssert2.default.deepEqual(result, new Date(2014, 1 /* Feb */, 1));
      });
    });

    describe('weeks', function () {
      it('parses YYYY-Www', function () {
        var result = (0, _.parse)('2014-W02');
        _powerAssert2.default.deepEqual(result, new Date(2014, 0 /* Jan */, 6));
      });

      it('parses YYYYWww', function () {
        var result = (0, _.parse)('2014W02');
        _powerAssert2.default.deepEqual(result, new Date(2014, 0 /* Jan */, 6));
      });
    });

    describe('calendar dates', function () {
      it('parses YYYY-MM-DD', function () {
        var result = (0, _.parse)('2014-02-11');
        _powerAssert2.default.deepEqual(result, new Date(2014, 1, /* Feb */11));
      });

      it('parses YYYYMMDD', function () {
        var result = (0, _.parse)('20140211');
        _powerAssert2.default.deepEqual(result, new Date(2014, 1 /* Feb */, 11));
      });
    });

    describe('week dates', function () {
      it('parses YYYY-Www-D', function () {
        var result = (0, _.parse)('2014-W02-7');
        _powerAssert2.default.deepEqual(result, new Date(2014, 0 /* Jan */, 12));
      });

      it('parses YYYYWwwD', function () {
        var result = (0, _.parse)('2014W027');
        _powerAssert2.default.deepEqual(result, new Date(2014, 0 /* Jan */, 12));
      });

      it('correctly handles years in which 4 January is Sunday', function () {
        var result = (0, _.parse)('2009-W01-1');
        _powerAssert2.default.deepEqual(result, new Date(2008, 11 /* Dec */, 29));
      });
    });

    describe('ordinal dates', function () {
      it('parses YYYY-DDD', function () {
        var result = (0, _.parse)('2014-026');
        _powerAssert2.default.deepEqual(result, new Date(2014, 0 /* Jan */, 26));
      });

      it('parses YYYYDDD', function () {
        var result = (0, _.parse)('2014026');
        _powerAssert2.default.deepEqual(result, new Date(2014, 0 /* Jan */, 26));
      });
    });

    describe('date and time combined', function () {
      it('parses YYYY-MM-DDThh:mm', function () {
        var result = (0, _.parse)('2014-02-11T11:30');
        _powerAssert2.default.deepEqual(result, new Date(2014, 1 /* Feb */, 11, 11, 30));
      });

      it('parses YYYY-MM-DDThhmm', function () {
        var result = (0, _.parse)('2014-02-11T1130');
        _powerAssert2.default.deepEqual(result, new Date(2014, 1 /* Feb */, 11, 11, 30));
      });

      it('parses 24:00 as midnight', function () {
        var result = (0, _.parse)('2014-02-11T2400');
        _powerAssert2.default.deepEqual(result, new Date(2014, 1 /* Feb */, 11, 0, 0));
      });
    });

    describe('extended century representation', function () {
      it('parses century 101 BC - 2 BC', function () {
        var result = (0, _.parse)('-0001');
        var date = new Date(-100, 0 /* Jan */, 1);
        date.setFullYear(-100);
        _powerAssert2.default.deepEqual(result, date);
      });

      it('parses century 1 BC - 99 AD', function () {
        var result = (0, _.parse)('00');
        var date = new Date(0, 0 /* Jan */, 1);
        date.setFullYear(0);
        _powerAssert2.default.deepEqual(result, date);
      });

      it('parses centruries after 9999 AD', function () {
        var result = (0, _.parse)('+0123');
        _powerAssert2.default.deepEqual(result, new Date(12300, 0 /* Jan */, 1));
      });

      it('allows to specify the number of additional digits', function () {
        var result = (0, _.parse)('-20', { additionalDigits: 0 });
        var date = new Date(-2000, 0 /* Jan */, 1);
        date.setFullYear(-2000);
        _powerAssert2.default.deepEqual(result, date);
      });
    });

    describe('extended year representation', function () {
      it('correctly parses years from 1 AD to 99 AD', function () {
        var result = (0, _.parse)('0095-07-02');
        var date = new Date(0, 6 /* Jul */, 2);
        date.setFullYear(95);
        _powerAssert2.default.deepEqual(result, date);
      });

      it('parses years after 9999 AD', function () {
        var result = (0, _.parse)('+012345-07-02');
        _powerAssert2.default.deepEqual(result, new Date(12345, 6 /* Jul */, 2));
      });

      it('allows to specify the number of additional digits', function () {
        var result = (0, _.parse)('+12340702', { additionalDigits: 0 });
        _powerAssert2.default.deepEqual(result, new Date(1234, 6 /* Jul */, 2));
      });

      it('parses year 1 BC', function () {
        var result = (0, _.parse)('0000-07-02');
        var date = new Date(0, 6 /* Jul */, 2);
        date.setFullYear(0);
        _powerAssert2.default.deepEqual(result, date);
      });

      it('parses years less than 1 BC', function () {
        var result = (0, _.parse)('-000001-07-02');
        var date = new Date(0, 6 /* Jul */, 2);
        date.setFullYear(-1);
        _powerAssert2.default.deepEqual(result, date);
      });
    });

    describe('float time', function () {
      it('parses float hours', function () {
        var result = (0, _.parse)('2014-02-11T11.5');
        _powerAssert2.default.deepEqual(result, new Date(2014, 1 /* Feb */, 11, 11, 30));
      });

      it('parses float minutes', function () {
        var result = (0, _.parse)('2014-02-11T11:30.5');
        _powerAssert2.default.deepEqual(result, new Date(2014, 1 /* Feb */, 11, 11, 30, 30));
      });

      it('parses float seconds', function () {
        var result = (0, _.parse)('2014-02-11T11:30:30.768');
        _powerAssert2.default.deepEqual(result, new Date(2014, 1 /* Feb */, 11, 11, 30, 30, 768));
      });

      it('parses , as decimal mark', function () {
        var result = (0, _.parse)('2014-02-11T11,5');
        _powerAssert2.default.deepEqual(result, new Date(2014, 1 /* Feb */, 11, 11, 30));
      });
    });

    describe('timezones', function () {
      context('when the date and the time are specified', function () {
        it('parses Z', function () {
          var result = (0, _.parse)('2014-10-25T06:46:20Z');
          _powerAssert2.default.deepEqual(result, new Date('2014-10-25T13:46:20+07:00'));
        });

        it('parses ±hh:mm', function () {
          var result = (0, _.parse)('2014-10-25T13:46:20+07:00');
          _powerAssert2.default.deepEqual(result, new Date('2014-10-25T13:46:20+07:00'));
        });

        it('parses ±hhmm', function () {
          var result = (0, _.parse)('2014-10-25T03:46:20-0300');
          _powerAssert2.default.deepEqual(result, new Date('2014-10-25T13:46:20+07:00'));
        });

        it('parses ±hh', function () {
          var result = (0, _.parse)('2014-10-25T13:46:20+07');
          _powerAssert2.default.deepEqual(result, new Date('2014-10-25T13:46:20+07:00'));
        });
      });
    });
  });

  it('implicitly converts options', function () {
    // $ExpectedMistake
    var result = (0, _.parse)('+12340702', { additionalDigits: '0' });
    _powerAssert2.default.deepEqual(result, new Date(1234, 6 /* Jul */, 2));
  });

  describe('failure', function () {
    it('the fallback to `new Date` if the string is not an ISO formatted date', function () {
      var result = (0, _.parse)(new Date(2014, 8 /* Sep */, 1, 11).toString());
      _powerAssert2.default.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11));
    });
  });

  describe('invalid argument', function () {
    it('returns Invalid Date if argument is non-date string', function () {
      var result = (0, _.parse)('abc');
      (0, _powerAssert2.default)(result instanceof Date);
      (0, _powerAssert2.default)(isNaN(result));
    });

    it('returns Invalid Date if argument is NaN', function () {
      var result = (0, _.parse)(NaN);
      (0, _powerAssert2.default)(result instanceof Date);
      (0, _powerAssert2.default)(isNaN(result));
    });

    it('returns Invalid Date if argument is Invalid Date', function () {
      var result = (0, _.parse)(new Date(NaN));
      (0, _powerAssert2.default)(result instanceof Date);
      (0, _powerAssert2.default)(isNaN(result));
    });
  });
});