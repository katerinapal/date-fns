import ext_assert from "power-assert";
import { buildFormatLocale as _buildFormatLocale } from "./";

describe('tr locale > buildFormatLocale', function () {
  it('returns an object', function () {
    ext_assert(typeof _buildFormatLocale() === 'object')
  })

  describe('formatters property', function () {
    it('is an object', function () {
      ext_assert(typeof _buildFormatLocale().formatters === 'object')
    })

    describe('MMM', function () {
      it('returns the correct string for January', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 0)) === 'Oca')
      })

      it('returns the correct string for February', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 1)) === 'Şub')
      })

      it('returns the correct string for March', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 2)) === 'Mar')
      })

      it('returns the correct string for April', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2015, 3)) === 'Nis')
      })

      it('returns the correct string for May', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 4)) === 'May')
      })

      it('returns the correct string for June', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 5)) === 'Haz')
      })

      it('returns the correct string for July', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 6)) === 'Tem')
      })

      it('returns the correct string for August', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 7)) === 'Ağu')
      })

      it('returns the correct string for September', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 8)) === 'Eyl')
      })

      it('returns the correct string for October', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 9)) === 'Eki')
      })

      it('returns the correct string for November', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 10)) === 'Kas')
      })

      it('returns the correct string for December', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 11)) === 'Ara')
      })
    })

    describe('MMMM', function () {
      it('returns the correct string for January', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 0)) === 'Ocak')
      })

      it('returns the correct string for February', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 1)) === 'Şubat')
      })

      it('returns the correct string for March', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 2)) === 'Mart')
      })

      it('returns the correct string for April', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2015, 3)) === 'Nisan')
      })

      it('returns the correct string for May', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 4)) === 'Mayıs')
      })

      it('returns the correct string for June', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 5)) === 'Haziran')
      })

      it('returns the correct string for July', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 6)) === 'Temmuz')
      })

      it('returns the correct string for August', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 7)) === 'Ağustos')
      })

      it('returns the correct string for September', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 8)) === 'Eylül')
      })

      it('returns the correct string for October', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 9)) === 'Ekim')
      })

      it('returns the correct string for November', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 10)) === 'Kasım')
      })

      it('returns the correct string for December', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 11)) === 'Aralık')
      })
    })

    describe('dd', function () {
      it('returns the correct string for Sunday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 7)) === 'Pz')
      })

      it('returns the correct string for Monday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 1)) === 'Pt')
      })

      it('returns the correct string for Tuesday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 2)) === 'Sa')
      })

      it('returns the correct string for Wednesday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 3)) === 'Ça')
      })

      it('returns the correct string for Thursday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 4)) === 'Pe')
      })

      it('returns the correct string for Friday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 5)) === 'Cu')
      })

      it('returns the correct string for Saturday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 6)) === 'Ct')
      })
    })

    describe('ddd', function () {
      it('returns the correct string for Sunday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 7)) === 'Paz')
      })

      it('returns the correct string for Monday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 1)) === 'Pts')
      })

      it('returns the correct string for Tuesday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 2)) === 'Sal')
      })

      it('returns the correct string for Wednesday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 3)) === 'Çar')
      })

      it('returns the correct string for Thursday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 4)) === 'Per')
      })

      it('returns the correct string for Friday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 5)) === 'Cum')
      })

      it('returns the correct string for Saturday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 6)) === 'Cts')
      })
    })

    describe('dddd', function () {
      it('returns the correct string for Sunday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 7)) === 'Pazar')
      })

      it('returns the correct string for Monday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 1)) === 'Pazartesi')
      })

      it('returns the correct string for Tuesday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 2)) === 'Salı')
      })

      it('returns the correct string for Wednesday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 3)) === 'Çarşamba')
      })

      it('returns the correct string for Thursday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 4)) === 'Perşembe')
      })

      it('returns the correct string for Friday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 5)) === 'Cuma')
      })

      it('returns the correct string for Saturday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 6)) === 'Cumartesi')
      })
    })

    describe('A', function () {
      it('returns the correct string for 1-11 a.m.', function () {
        ext_assert(_buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 1)) === 'ÖÖ')
      })

      it('returns the correct string for 12 a.m.', function () {
        ext_assert(_buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 0)) === 'ÖÖ')
      })

      it('returns the correct string for 1-11 p.m.', function () {
        ext_assert(_buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 13)) === 'ÖS')
      })

      it('returns the correct string for 12 p.m.', function () {
        ext_assert(_buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 12)) === 'ÖS')
      })
    })

    describe('a', function () {
      it('returns the correct string for 1-11 a.m.', function () {
        ext_assert(_buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 1)) === 'öö')
      })

      it('returns the correct string for 12 a.m.', function () {
        ext_assert(_buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 0)) === 'öö')
      })

      it('returns the correct string for 1-11 p.m.', function () {
        ext_assert(_buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 13)) === 'ös')
      })

      it('returns the correct string for 12 p.m.', function () {
        ext_assert(_buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 12)) === 'ös')
      })
    })

    describe('aa', function () {
      it('returns the correct string for 1-11 a.m.', function () {
        ext_assert(_buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 1)) === 'ö.ö.')
      })

      it('returns the correct string for 12 a.m.', function () {
        ext_assert(_buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 0)) === 'ö.ö.')
      })

      it('returns the correct string for 1-11 p.m.', function () {
        ext_assert(_buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 13)) === 'ö.s.')
      })

      it('returns the correct string for 12 p.m.', function () {
        ext_assert(_buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 12)) === 'ö.s.')
      })
    })

    describe('Mo', function () {
      it('returns ordinal result of M formatter', function () {
        ext_assert(_buildFormatLocale().formatters.Mo(null, {M: function () { return 1 }}) === '1\'inci')
        ext_assert(_buildFormatLocale().formatters.Mo(null, {M: function () { return 2 }}) === '2\'inci')
        ext_assert(_buildFormatLocale().formatters.Mo(null, {M: function () { return 3 }}) === '3\'üncü')
        ext_assert(_buildFormatLocale().formatters.Mo(null, {M: function () { return 11 }}) === '11\'inci')
        ext_assert(_buildFormatLocale().formatters.Mo(null, {M: function () { return 101 }}) === '101\'inci')
        ext_assert(_buildFormatLocale().formatters.Mo(null, {M: function () { return 111 }}) === '111\'inci')
      })
    })

    describe('Do', function () {
      it('returns ordinal result of D formatter', function () {
        ext_assert(_buildFormatLocale().formatters.Do(null, {D: function () { return 1 }}) === '1\'inci')
        ext_assert(_buildFormatLocale().formatters.Do(null, {D: function () { return 2 }}) === '2\'inci')
        ext_assert(_buildFormatLocale().formatters.Do(null, {D: function () { return 3 }}) === '3\'üncü')
        ext_assert(_buildFormatLocale().formatters.Do(null, {D: function () { return 11 }}) === '11\'inci')
        ext_assert(_buildFormatLocale().formatters.Do(null, {D: function () { return 101 }}) === '101\'inci')
        ext_assert(_buildFormatLocale().formatters.Do(null, {D: function () { return 111 }}) === '111\'inci')
      })
    })

    describe('DDDo', function () {
      it('returns ordinal result of DDD formatter', function () {
        ext_assert(_buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 1 }}) === '1\'inci')
        ext_assert(_buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 2 }}) === '2\'inci')
        ext_assert(_buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 3 }}) === '3\'üncü')
        ext_assert(_buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 11 }}) === '11\'inci')
        ext_assert(_buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 101 }}) === '101\'inci')
        ext_assert(_buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 111 }}) === '111\'inci')
      })
    })

    describe('do', function () {
      it('returns ordinal result of d formatter', function () {
        ext_assert(_buildFormatLocale().formatters.do(null, {d: function () { return 1 }}) === '1\'inci')
        ext_assert(_buildFormatLocale().formatters.do(null, {d: function () { return 2 }}) === '2\'inci')
        ext_assert(_buildFormatLocale().formatters.do(null, {d: function () { return 3 }}) === '3\'üncü')
        ext_assert(_buildFormatLocale().formatters.do(null, {d: function () { return 11 }}) === '11\'inci')
        ext_assert(_buildFormatLocale().formatters.do(null, {d: function () { return 101 }}) === '101\'inci')
        ext_assert(_buildFormatLocale().formatters.do(null, {d: function () { return 111 }}) === '111\'inci')
      })
    })

    describe('Qo', function () {
      it('returns ordinal result of Q formatter', function () {
        ext_assert(_buildFormatLocale().formatters.Qo(null, {Q: function () { return 1 }}) === '1\'inci')
        ext_assert(_buildFormatLocale().formatters.Qo(null, {Q: function () { return 2 }}) === '2\'inci')
        ext_assert(_buildFormatLocale().formatters.Qo(null, {Q: function () { return 3 }}) === '3\'üncü')
        ext_assert(_buildFormatLocale().formatters.Qo(null, {Q: function () { return 11 }}) === '11\'inci')
        ext_assert(_buildFormatLocale().formatters.Qo(null, {Q: function () { return 101 }}) === '101\'inci')
        ext_assert(_buildFormatLocale().formatters.Qo(null, {Q: function () { return 111 }}) === '111\'inci')
      })
    })

    describe('Wo', function () {
      it('returns ordinal result of W formatter', function () {
        ext_assert(_buildFormatLocale().formatters.Wo(null, {W: function () { return 1 }}) === '1\'inci')
        ext_assert(_buildFormatLocale().formatters.Wo(null, {W: function () { return 2 }}) === '2\'inci')
        ext_assert(_buildFormatLocale().formatters.Wo(null, {W: function () { return 3 }}) === '3\'üncü')
        ext_assert(_buildFormatLocale().formatters.Wo(null, {W: function () { return 11 }}) === '11\'inci')
        ext_assert(_buildFormatLocale().formatters.Wo(null, {W: function () { return 101 }}) === '101\'inci')
        ext_assert(_buildFormatLocale().formatters.Wo(null, {W: function () { return 111 }}) === '111\'inci')
      })
    })
  })

  describe('formattingTokensRegExp property', function () {
    it('is an instance of RegExp', function () {
      ext_assert(_buildFormatLocale().formattingTokensRegExp instanceof RegExp)
    })
  })
})
