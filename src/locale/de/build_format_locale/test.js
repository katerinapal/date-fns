import ext_assert from "power-assert";
import { buildFormatLocale as _buildFormatLocale } from "./";

describe('de locale > buildFormatLocale', function () {
  it('returns an object', function () {
    ext_assert(typeof _buildFormatLocale() === 'object')
  })

  describe('formatters property', function () {
    it('is an object', function () {
      ext_assert(typeof _buildFormatLocale().formatters === 'object')
    })

    describe('MMM', function () {
      it('returns the correct string for January', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 0)) === 'Jan')
      })

      it('returns the correct string for February', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 1)) === 'Feb')
      })

      it('returns the correct string for March', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 2)) === 'Mär')
      })

      it('returns the correct string for April', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2015, 3)) === 'Apr')
      })

      it('returns the correct string for May', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 4)) === 'Mai')
      })

      it('returns the correct string for June', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 5)) === 'Jun')
      })

      it('returns the correct string for July', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 6)) === 'Jul')
      })

      it('returns the correct string for August', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 7)) === 'Aug')
      })

      it('returns the correct string for September', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 8)) === 'Sep')
      })

      it('returns the correct string for October', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 9)) === 'Okt')
      })

      it('returns the correct string for November', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 10)) === 'Nov')
      })

      it('returns the correct string for December', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 11)) === 'Dez')
      })
    })

    describe('MMMM', function () {
      it('returns the correct string for January', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 0)) === 'Januar')
      })

      it('returns the correct string for February', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 1)) === 'Februar')
      })

      it('returns the correct string for March', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 2)) === 'März')
      })

      it('returns the correct string for April', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2015, 3)) === 'April')
      })

      it('returns the correct string for May', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 4)) === 'Mai')
      })

      it('returns the correct string for June', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 5)) === 'Juni')
      })

      it('returns the correct string for July', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 6)) === 'Juli')
      })

      it('returns the correct string for August', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 7)) === 'August')
      })

      it('returns the correct string for September', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 8)) === 'September')
      })

      it('returns the correct string for October', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 9)) === 'Oktober')
      })

      it('returns the correct string for November', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 10)) === 'November')
      })

      it('returns the correct string for December', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 11)) === 'Dezember')
      })
    })

    describe('dd', function () {
      it('returns the correct string for Sunday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 7)) === 'So')
      })

      it('returns the correct string for Monday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 1)) === 'Mo')
      })

      it('returns the correct string for Tuesday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 2)) === 'Di')
      })

      it('returns the correct string for Wednesday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 3)) === 'Mi')
      })

      it('returns the correct string for Thursday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 4)) === 'Do')
      })

      it('returns the correct string for Friday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 5)) === 'Fr')
      })

      it('returns the correct string for Saturday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 6)) === 'Sa')
      })
    })

    describe('ddd', function () {
      it('returns the correct string for Sunday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 7)) === 'Son')
      })

      it('returns the correct string for Monday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 1)) === 'Mon')
      })

      it('returns the correct string for Tuesday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 2)) === 'Die')
      })

      it('returns the correct string for Wednesday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 3)) === 'Mit')
      })

      it('returns the correct string for Thursday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 4)) === 'Don')
      })

      it('returns the correct string for Friday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 5)) === 'Fre')
      })

      it('returns the correct string for Saturday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 6)) === 'Sam')
      })
    })

    describe('dddd', function () {
      it('returns the correct string for Sunday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 7)) === 'Sonntag')
      })

      it('returns the correct string for Monday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 1)) === 'Montag')
      })

      it('returns the correct string for Tuesday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 2)) === 'Dienstag')
      })

      it('returns the correct string for Wednesday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 3)) === 'Mittwoch')
      })

      it('returns the correct string for Thursday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 4)) === 'Donnerstag')
      })

      it('returns the correct string for Friday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 5)) === 'Freitag')
      })

      it('returns the correct string for Saturday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 6)) === 'Samstag')
      })
    })

    describe('A', function () {
      it('returns the correct string for 1-11 a.m.', function () {
        ext_assert(_buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 1)) === 'AM')
      })

      it('returns the correct string for 12 a.m.', function () {
        ext_assert(_buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 0)) === 'AM')
      })

      it('returns the correct string for 1-11 p.m.', function () {
        ext_assert(_buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 13)) === 'PM')
      })

      it('returns the correct string for 12 p.m.', function () {
        ext_assert(_buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 12)) === 'PM')
      })
    })

    describe('a', function () {
      it('returns the correct string for 1-11 a.m.', function () {
        ext_assert(_buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 1)) === 'am')
      })

      it('returns the correct string for 12 a.m.', function () {
        ext_assert(_buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 0)) === 'am')
      })

      it('returns the correct string for 1-11 p.m.', function () {
        ext_assert(_buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 13)) === 'pm')
      })

      it('returns the correct string for 12 p.m.', function () {
        ext_assert(_buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 12)) === 'pm')
      })
    })

    describe('aa', function () {
      it('returns the correct string for 1-11 a.m.', function () {
        ext_assert(_buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 1)) === 'a.m.')
      })

      it('returns the correct string for 12 a.m.', function () {
        ext_assert(_buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 0)) === 'a.m.')
      })

      it('returns the correct string for 1-11 p.m.', function () {
        ext_assert(_buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 13)) === 'p.m.')
      })

      it('returns the correct string for 12 p.m.', function () {
        ext_assert(_buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 12)) === 'p.m.')
      })
    })

    describe('Mo', function () {
      it('returns ordinal result of M formatter', function () {
        ext_assert(_buildFormatLocale().formatters.Mo(null, {M: function () { return 1 }}) === '1.')
        ext_assert(_buildFormatLocale().formatters.Mo(null, {M: function () { return 2 }}) === '2.')
        ext_assert(_buildFormatLocale().formatters.Mo(null, {M: function () { return 3 }}) === '3.')
        ext_assert(_buildFormatLocale().formatters.Mo(null, {M: function () { return 11 }}) === '11.')
        ext_assert(_buildFormatLocale().formatters.Mo(null, {M: function () { return 101 }}) === '101.')
        ext_assert(_buildFormatLocale().formatters.Mo(null, {M: function () { return 111 }}) === '111.')
      })
    })

    describe('Do', function () {
      it('returns ordinal result of D formatter', function () {
        ext_assert(_buildFormatLocale().formatters.Do(null, {D: function () { return 1 }}) === '1.')
        ext_assert(_buildFormatLocale().formatters.Do(null, {D: function () { return 2 }}) === '2.')
        ext_assert(_buildFormatLocale().formatters.Do(null, {D: function () { return 3 }}) === '3.')
        ext_assert(_buildFormatLocale().formatters.Do(null, {D: function () { return 11 }}) === '11.')
        ext_assert(_buildFormatLocale().formatters.Do(null, {D: function () { return 101 }}) === '101.')
        ext_assert(_buildFormatLocale().formatters.Do(null, {D: function () { return 111 }}) === '111.')
      })
    })

    describe('DDDo', function () {
      it('returns ordinal result of DDD formatter', function () {
        ext_assert(_buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 1 }}) === '1.')
        ext_assert(_buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 2 }}) === '2.')
        ext_assert(_buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 3 }}) === '3.')
        ext_assert(_buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 11 }}) === '11.')
        ext_assert(_buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 101 }}) === '101.')
        ext_assert(_buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 111 }}) === '111.')
      })
    })

    describe('do', function () {
      it('returns ordinal result of d formatter', function () {
        ext_assert(_buildFormatLocale().formatters.do(null, {d: function () { return 1 }}) === '1.')
        ext_assert(_buildFormatLocale().formatters.do(null, {d: function () { return 2 }}) === '2.')
        ext_assert(_buildFormatLocale().formatters.do(null, {d: function () { return 3 }}) === '3.')
        ext_assert(_buildFormatLocale().formatters.do(null, {d: function () { return 11 }}) === '11.')
        ext_assert(_buildFormatLocale().formatters.do(null, {d: function () { return 101 }}) === '101.')
        ext_assert(_buildFormatLocale().formatters.do(null, {d: function () { return 111 }}) === '111.')
      })
    })

    describe('Qo', function () {
      it('returns ordinal result of Q formatter', function () {
        ext_assert(_buildFormatLocale().formatters.Qo(null, {Q: function () { return 1 }}) === '1.')
        ext_assert(_buildFormatLocale().formatters.Qo(null, {Q: function () { return 2 }}) === '2.')
        ext_assert(_buildFormatLocale().formatters.Qo(null, {Q: function () { return 3 }}) === '3.')
        ext_assert(_buildFormatLocale().formatters.Qo(null, {Q: function () { return 11 }}) === '11.')
        ext_assert(_buildFormatLocale().formatters.Qo(null, {Q: function () { return 101 }}) === '101.')
        ext_assert(_buildFormatLocale().formatters.Qo(null, {Q: function () { return 111 }}) === '111.')
      })
    })

    describe('Wo', function () {
      it('returns ordinal result of W formatter', function () {
        ext_assert(_buildFormatLocale().formatters.Wo(null, {W: function () { return 1 }}) === '1.')
        ext_assert(_buildFormatLocale().formatters.Wo(null, {W: function () { return 2 }}) === '2.')
        ext_assert(_buildFormatLocale().formatters.Wo(null, {W: function () { return 3 }}) === '3.')
        ext_assert(_buildFormatLocale().formatters.Wo(null, {W: function () { return 11 }}) === '11.')
        ext_assert(_buildFormatLocale().formatters.Wo(null, {W: function () { return 101 }}) === '101.')
        ext_assert(_buildFormatLocale().formatters.Wo(null, {W: function () { return 111 }}) === '111.')
      })
    })
  })

  describe('formattingTokensRegExp property', function () {
    it('is an instance of RegExp', function () {
      ext_assert(_buildFormatLocale().formattingTokensRegExp instanceof RegExp)
    })
  })
})
