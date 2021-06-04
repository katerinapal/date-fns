import ext_assert from "power-assert";
import { buildFormatLocale as _buildFormatLocale } from "./";

describe('bg locale > buildFormatLocale', function () {
  it('returns an object', function () {
    ext_assert(typeof _buildFormatLocale() === 'object')
  })

  describe('formatters property', function () {
    it('is an object', function () {
      ext_assert(typeof _buildFormatLocale().formatters === 'object')
    })

    describe('MMM', function () {
      it('returns the correct string for January', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 0)) === 'яну')
      })

      it('returns the correct string for February', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 1)) === 'фев')
      })

      it('returns the correct string for March', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 2)) === 'мар')
      })

      it('returns the correct string for April', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2015, 3)) === 'апр')
      })

      it('returns the correct string for May', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 4)) === 'май')
      })

      it('returns the correct string for June', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 5)) === 'юни')
      })

      it('returns the correct string for July', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 6)) === 'юли')
      })

      it('returns the correct string for August', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 7)) === 'авг')
      })

      it('returns the correct string for September', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 8)) === 'сеп')
      })

      it('returns the correct string for October', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 9)) === 'окт')
      })

      it('returns the correct string for November', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 10)) === 'ное')
      })

      it('returns the correct string for December', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 11)) === 'дек')
      })
    })

    describe('MMMM', function () {
      it('returns the correct string for January', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 0)) === 'януари')
      })

      it('returns the correct string for February', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 1)) === 'февруари')
      })

      it('returns the correct string for March', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 2)) === 'март')
      })

      it('returns the correct string for April', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2015, 3)) === 'април')
      })

      it('returns the correct string for May', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 4)) === 'май')
      })

      it('returns the correct string for June', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 5)) === 'юни')
      })

      it('returns the correct string for July', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 6)) === 'юли')
      })

      it('returns the correct string for August', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 7)) === 'август')
      })

      it('returns the correct string for September', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 8)) === 'септември')
      })

      it('returns the correct string for October', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 9)) === 'октомври')
      })

      it('returns the correct string for November', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 10)) === 'ноември')
      })

      it('returns the correct string for December', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 11)) === 'декември')
      })
    })

    describe('dd', function () {
      it('returns the correct string for Sunday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 7)) === 'нд')
      })

      it('returns the correct string for Monday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 1)) === 'пн')
      })

      it('returns the correct string for Tuesday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 2)) === 'вт')
      })

      it('returns the correct string for Wednesday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 3)) === 'ср')
      })

      it('returns the correct string for Thursday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 4)) === 'чт')
      })

      it('returns the correct string for Friday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 5)) === 'пт')
      })

      it('returns the correct string for Saturday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 6)) === 'сб')
      })
    })

    describe('ddd', function () {
      it('returns the correct string for Sunday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 7)) === 'нед')
      })

      it('returns the correct string for Monday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 1)) === 'пон')
      })

      it('returns the correct string for Tuesday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 2)) === 'вто')
      })

      it('returns the correct string for Wednesday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 3)) === 'сря')
      })

      it('returns the correct string for Thursday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 4)) === 'чет')
      })

      it('returns the correct string for Friday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 5)) === 'пет')
      })

      it('returns the correct string for Saturday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 6)) === 'съб')
      })
    })

    describe('dddd', function () {
      it('returns the correct string for Sunday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 7)) === 'неделя')
      })

      it('returns the correct string for Monday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 1)) === 'понеделник')
      })

      it('returns the correct string for Tuesday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 2)) === 'вторник')
      })

      it('returns the correct string for Wednesday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 3)) === 'сряда')
      })

      it('returns the correct string for Thursday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 4)) === 'четвъртък')
      })

      it('returns the correct string for Friday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 5)) === 'петък')
      })

      it('returns the correct string for Saturday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 6)) === 'събота')
      })
    })

    describe('A', function () {
      it('returns the correct string for 4-11 a.m.', function () {
        ext_assert(_buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 4)) === 'сутринта')
      })

      it('returns the correct string for 17p.m.-3 a.m.', function () {
        ext_assert(_buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 17)) === 'вечерта')
      })

      it('returns the correct string for 12-13 p.m.', function () {
        ext_assert(_buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 12)) === 'на обяд')
      })

      it('returns the correct string for 14-17 p.m.', function () {
        ext_assert(_buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 14)) === 'следобед')
      })
    })

    describe('a', function () {
      it('returns the correct string for 4-11 a.m.', function () {
        ext_assert(_buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 11)) === 'сутринта')
      })

      it('returns the correct string for 17p.m.-3 a.m.', function () {
        ext_assert(_buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 3)) === 'вечерта')
      })

      it('returns the correct string for 12-13 p.m.', function () {
        ext_assert(_buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 13)) === 'на обяд')
      })

      it('returns the correct string for 14-16 p.m.', function () {
        ext_assert(_buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 16)) === 'следобед')
      })
    })

    describe('aa', function () {
      it('returns the correct string for 4-11 a.m.', function () {
        ext_assert(_buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 8)) === 'сутринта')
      })

      it('returns the correct string for 17p.m.-3 a.m.', function () {
        ext_assert(_buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 0)) === 'вечерта')
      })

      it('returns the correct string for 12-13 p.m.', function () {
        ext_assert(_buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 13)) === 'на обяд')
      })

      it('returns the correct string for 14-16 p.m.', function () {
        ext_assert(_buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 15)) === 'следобед')
      })
    })

    describe('Mo', function () {
      it('returns ordinal result of M formatter', function () {
        ext_assert(_buildFormatLocale().formatters.Mo(null, {M: function () { return 1 }}) === '1-ви')
        ext_assert(_buildFormatLocale().formatters.Mo(null, {M: function () { return 2 }}) === '2-ри')
        ext_assert(_buildFormatLocale().formatters.Mo(null, {M: function () { return 3 }}) === '3-и')
        ext_assert(_buildFormatLocale().formatters.Mo(null, {M: function () { return 11 }}) === '11-и')
        ext_assert(_buildFormatLocale().formatters.Mo(null, {M: function () { return 101 }}) === '101-ви')
        ext_assert(_buildFormatLocale().formatters.Mo(null, {M: function () { return 111 }}) === '111-и')
      })
    })

    describe('Do', function () {
      it('returns ordinal result of D formatter', function () {
        ext_assert(_buildFormatLocale().formatters.Do(null, {D: function () { return 1 }}) === '1-ви')
        ext_assert(_buildFormatLocale().formatters.Do(null, {D: function () { return 2 }}) === '2-ри')
        ext_assert(_buildFormatLocale().formatters.Do(null, {D: function () { return 3 }}) === '3-и')
        ext_assert(_buildFormatLocale().formatters.Do(null, {D: function () { return 11 }}) === '11-и')
        ext_assert(_buildFormatLocale().formatters.Do(null, {D: function () { return 101 }}) === '101-ви')
        ext_assert(_buildFormatLocale().formatters.Do(null, {D: function () { return 111 }}) === '111-и')
      })
    })

    describe('DDDo', function () {
      it('returns ordinal result of DDD formatter', function () {
        ext_assert(_buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 1 }}) === '1-ви')
        ext_assert(_buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 2 }}) === '2-ри')
        ext_assert(_buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 3 }}) === '3-и')
        ext_assert(_buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 11 }}) === '11-и')
        ext_assert(_buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 101 }}) === '101-ви')
        ext_assert(_buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 111 }}) === '111-и')
      })
    })

    describe('do', function () {
      it('returns ordinal result of d formatter', function () {
        ext_assert(_buildFormatLocale().formatters.do(null, {d: function () { return 1 }}) === '1-ви')
        ext_assert(_buildFormatLocale().formatters.do(null, {d: function () { return 2 }}) === '2-ри')
        ext_assert(_buildFormatLocale().formatters.do(null, {d: function () { return 3 }}) === '3-и')
        ext_assert(_buildFormatLocale().formatters.do(null, {d: function () { return 11 }}) === '11-и')
        ext_assert(_buildFormatLocale().formatters.do(null, {d: function () { return 101 }}) === '101-ви')
        ext_assert(_buildFormatLocale().formatters.do(null, {d: function () { return 111 }}) === '111-и')
      })
    })

    describe('Qo', function () {
      it('returns ordinal result of Q formatter', function () {
        ext_assert(_buildFormatLocale().formatters.Qo(null, {Q: function () { return 1 }}) === '1-ви')
        ext_assert(_buildFormatLocale().formatters.Qo(null, {Q: function () { return 2 }}) === '2-ри')
        ext_assert(_buildFormatLocale().formatters.Qo(null, {Q: function () { return 3 }}) === '3-и')
        ext_assert(_buildFormatLocale().formatters.Qo(null, {Q: function () { return 11 }}) === '11-и')
        ext_assert(_buildFormatLocale().formatters.Qo(null, {Q: function () { return 101 }}) === '101-ви')
        ext_assert(_buildFormatLocale().formatters.Qo(null, {Q: function () { return 111 }}) === '111-и')
      })
    })

    describe('Wo', function () {
      it('returns ordinal result of W formatter', function () {
        ext_assert(_buildFormatLocale().formatters.Wo(null, {W: function () { return 1 }}) === '1-ви')
        ext_assert(_buildFormatLocale().formatters.Wo(null, {W: function () { return 2 }}) === '2-ри')
        ext_assert(_buildFormatLocale().formatters.Wo(null, {W: function () { return 3 }}) === '3-и')
        ext_assert(_buildFormatLocale().formatters.Wo(null, {W: function () { return 11 }}) === '11-и')
        ext_assert(_buildFormatLocale().formatters.Wo(null, {W: function () { return 101 }}) === '101-ви')
        ext_assert(_buildFormatLocale().formatters.Wo(null, {W: function () { return 111 }}) === '111-и')
      })
    })
  })

  describe('formattingTokensRegExp property', function () {
    it('is an instance of RegExp', function () {
      ext_assert(_buildFormatLocale().formattingTokensRegExp instanceof RegExp)
    })
  })
})
