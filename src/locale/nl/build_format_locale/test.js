import ext_assert from "power-assert";
import { buildFormatLocale as _buildFormatLocale } from "./";

describe('nl locale > buildFormatLocale', function () {
  it('returns an object', function () {
    ext_assert(typeof _buildFormatLocale() === 'object')
  })

  describe('formatters property', function () {
    it('is an object', function () {
      ext_assert(typeof _buildFormatLocale().formatters === 'object')
    })

    describe('MMM', function () {
      it('returns the correct string for January', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 0)) === 'jan')
      })

      it('returns the correct string for February', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 1)) === 'feb')
      })

      it('returns the correct string for March', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 2)) === 'mar')
      })

      it('returns the correct string for April', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2015, 3)) === 'apr')
      })

      it('returns the correct string for May', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 4)) === 'mei')
      })

      it('returns the correct string for June', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 5)) === 'jun')
      })

      it('returns the correct string for July', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 6)) === 'jul')
      })

      it('returns the correct string for August', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 7)) === 'aug')
      })

      it('returns the correct string for September', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 8)) === 'sep')
      })

      it('returns the correct string for October', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 9)) === 'okt')
      })

      it('returns the correct string for November', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 10)) === 'nov')
      })

      it('returns the correct string for December', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 11)) === 'dec')
      })
    })

    describe('MMMM', function () {
      it('returns the correct string for January', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 0)) === 'januari')
      })

      it('returns the correct string for February', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 1)) === 'februari')
      })

      it('returns the correct string for March', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 2)) === 'maart')
      })

      it('returns the correct string for April', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2015, 3)) === 'april')
      })

      it('returns the correct string for May', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 4)) === 'mei')
      })

      it('returns the correct string for June', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 5)) === 'juni')
      })

      it('returns the correct string for July', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 6)) === 'juli')
      })

      it('returns the correct string for August', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 7)) === 'augustus')
      })

      it('returns the correct string for September', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 8)) === 'september')
      })

      it('returns the correct string for October', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 9)) === 'oktober')
      })

      it('returns the correct string for November', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 10)) === 'november')
      })

      it('returns the correct string for December', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 11)) === 'december')
      })
    })

    describe('dd', function () {
      it('returns the correct string for Sunday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 7)) === 'zo')
      })

      it('returns the correct string for Monday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 1)) === 'ma')
      })

      it('returns the correct string for Tuesday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 2)) === 'di')
      })

      it('returns the correct string for Wednesday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 3)) === 'wo')
      })

      it('returns the correct string for Thursday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 4)) === 'do')
      })

      it('returns the correct string for Friday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 5)) === 'vr')
      })

      it('returns the correct string for Saturday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 6)) === 'za')
      })
    })

    describe('ddd', function () {
      it('returns the correct string for Sunday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 7)) === 'zon')
      })

      it('returns the correct string for Monday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 1)) === 'maa')
      })

      it('returns the correct string for Tuesday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 2)) === 'din')
      })

      it('returns the correct string for Wednesday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 3)) === 'woe')
      })

      it('returns the correct string for Thursday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 4)) === 'don')
      })

      it('returns the correct string for Friday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 5)) === 'vri')
      })

      it('returns the correct string for Saturday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 6)) === 'zat')
      })
    })

    describe('dddd', function () {
      it('returns the correct string for Sunday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 7)) === 'zondag')
      })

      it('returns the correct string for Monday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 1)) === 'maandag')
      })

      it('returns the correct string for Tuesday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 2)) === 'dinsdag')
      })

      it('returns the correct string for Wednesday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 3)) === 'woensdag')
      })

      it('returns the correct string for Thursday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 4)) === 'donderdag')
      })

      it('returns the correct string for Friday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 5)) === 'vrijdag')
      })

      it('returns the correct string for Saturday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 6)) === 'zaterdag')
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
        ext_assert(_buildFormatLocale().formatters.Mo(null, {M: function () { return 1 }}) === '1e')
        ext_assert(_buildFormatLocale().formatters.Mo(null, {M: function () { return 2 }}) === '2e')
        ext_assert(_buildFormatLocale().formatters.Mo(null, {M: function () { return 3 }}) === '3e')
        ext_assert(_buildFormatLocale().formatters.Mo(null, {M: function () { return 11 }}) === '11e')
        ext_assert(_buildFormatLocale().formatters.Mo(null, {M: function () { return 101 }}) === '101e')
        ext_assert(_buildFormatLocale().formatters.Mo(null, {M: function () { return 111 }}) === '111e')
      })
    })

    describe('Do', function () {
      it('returns ordinal result of D formatter', function () {
        ext_assert(_buildFormatLocale().formatters.Do(null, {D: function () { return 1 }}) === '1e')
        ext_assert(_buildFormatLocale().formatters.Do(null, {D: function () { return 2 }}) === '2e')
        ext_assert(_buildFormatLocale().formatters.Do(null, {D: function () { return 3 }}) === '3e')
        ext_assert(_buildFormatLocale().formatters.Do(null, {D: function () { return 11 }}) === '11e')
        ext_assert(_buildFormatLocale().formatters.Do(null, {D: function () { return 101 }}) === '101e')
        ext_assert(_buildFormatLocale().formatters.Do(null, {D: function () { return 111 }}) === '111e')
      })
    })

    describe('DDDo', function () {
      it('returns ordinal result of DDD formatter', function () {
        ext_assert(_buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 1 }}) === '1e')
        ext_assert(_buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 2 }}) === '2e')
        ext_assert(_buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 3 }}) === '3e')
        ext_assert(_buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 11 }}) === '11e')
        ext_assert(_buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 101 }}) === '101e')
        ext_assert(_buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 111 }}) === '111e')
      })
    })

    describe('do', function () {
      it('returns ordinal result of d formatter', function () {
        ext_assert(_buildFormatLocale().formatters.do(null, {d: function () { return 1 }}) === '1e')
        ext_assert(_buildFormatLocale().formatters.do(null, {d: function () { return 2 }}) === '2e')
        ext_assert(_buildFormatLocale().formatters.do(null, {d: function () { return 3 }}) === '3e')
        ext_assert(_buildFormatLocale().formatters.do(null, {d: function () { return 11 }}) === '11e')
        ext_assert(_buildFormatLocale().formatters.do(null, {d: function () { return 101 }}) === '101e')
        ext_assert(_buildFormatLocale().formatters.do(null, {d: function () { return 111 }}) === '111e')
      })
    })

    describe('Qo', function () {
      it('returns ordinal result of Q formatter', function () {
        ext_assert(_buildFormatLocale().formatters.Qo(null, {Q: function () { return 1 }}) === '1e')
        ext_assert(_buildFormatLocale().formatters.Qo(null, {Q: function () { return 2 }}) === '2e')
        ext_assert(_buildFormatLocale().formatters.Qo(null, {Q: function () { return 3 }}) === '3e')
        ext_assert(_buildFormatLocale().formatters.Qo(null, {Q: function () { return 11 }}) === '11e')
        ext_assert(_buildFormatLocale().formatters.Qo(null, {Q: function () { return 101 }}) === '101e')
        ext_assert(_buildFormatLocale().formatters.Qo(null, {Q: function () { return 111 }}) === '111e')
      })
    })

    describe('Wo', function () {
      it('returns ordinal result of W formatter', function () {
        ext_assert(_buildFormatLocale().formatters.Wo(null, {W: function () { return 1 }}) === '1e')
        ext_assert(_buildFormatLocale().formatters.Wo(null, {W: function () { return 2 }}) === '2e')
        ext_assert(_buildFormatLocale().formatters.Wo(null, {W: function () { return 3 }}) === '3e')
        ext_assert(_buildFormatLocale().formatters.Wo(null, {W: function () { return 11 }}) === '11e')
        ext_assert(_buildFormatLocale().formatters.Wo(null, {W: function () { return 101 }}) === '101e')
        ext_assert(_buildFormatLocale().formatters.Wo(null, {W: function () { return 111 }}) === '111e')
      })
    })
  })

  describe('formattingTokensRegExp property', function () {
    it('is an instance of RegExp', function () {
      ext_assert(_buildFormatLocale().formattingTokensRegExp instanceof RegExp)
    })
  })
})
