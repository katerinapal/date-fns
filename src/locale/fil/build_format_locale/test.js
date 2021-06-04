import ext_assert from "power-assert";
import { buildFormatLocale as _buildFormatLocale } from "./";

describe('fil locale > buildFormatLocale', function () {
  it('returns an object', function () {
    ext_assert(typeof _buildFormatLocale() === 'object')
  })

  describe('formatters property', function () {
    it('is an object', function () {
      ext_assert(typeof _buildFormatLocale().formatters === 'object')
    })

    describe('MMM', function () {
      it('returns the correct string for January', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 0)) === 'Ene')
      })

      it('returns the correct string for February', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 1)) === 'Peb')
      })

      it('returns the correct string for March', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 2)) === 'Mar')
      })

      it('returns the correct string for April', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2015, 3)) === 'Abr')
      })

      it('returns the correct string for May', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 4)) === 'May')
      })

      it('returns the correct string for June', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 5)) === 'Hun')
      })

      it('returns the correct string for July', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 6)) === 'Hul')
      })

      it('returns the correct string for August', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 7)) === 'Ago')
      })

      it('returns the correct string for September', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 8)) === 'Set')
      })

      it('returns the correct string for October', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 9)) === 'Okt')
      })

      it('returns the correct string for November', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 10)) === 'Nob')
      })

      it('returns the correct string for December', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 11)) === 'Dis')
      })
    })

    describe('MMMM', function () {
      it('returns the correct string for January', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 0)) === 'Enero')
      })

      it('returns the correct string for February', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 1)) === 'Pebrero')
      })

      it('returns the correct string for March', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 2)) === 'Marso')
      })

      it('returns the correct string for April', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2015, 3)) === 'Abril')
      })

      it('returns the correct string for May', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 4)) === 'Mayo')
      })

      it('returns the correct string for June', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 5)) === 'Hunyo')
      })

      it('returns the correct string for July', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 6)) === 'Hulyo')
      })

      it('returns the correct string for August', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 7)) === 'Agosto')
      })

      it('returns the correct string for September', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 8)) === 'Setyembre')
      })

      it('returns the correct string for October', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 9)) === 'Oktubre')
      })

      it('returns the correct string for November', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 10)) === 'Nobyembre')
      })

      it('returns the correct string for December', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 11)) === 'Disyembre')
      })
    })

    describe('dd', function () {
      it('returns the correct string for Sunday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 7)) === 'Li')
      })

      it('returns the correct string for Monday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 1)) === 'Lu')
      })

      it('returns the correct string for Tuesday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 2)) === 'Ma')
      })

      it('returns the correct string for Wednesday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 3)) === 'Mi')
      })

      it('returns the correct string for Thursday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 4)) === 'Hu')
      })

      it('returns the correct string for Friday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 5)) === 'Bi')
      })

      it('returns the correct string for Saturday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 6)) === 'Sa')
      })
    })

    describe('ddd', function () {
      it('returns the correct string for Sunday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 7)) === 'Lin')
      })

      it('returns the correct string for Monday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 1)) === 'Lun')
      })

      it('returns the correct string for Tuesday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 2)) === 'Mar')
      })

      it('returns the correct string for Wednesday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 3)) === 'Miy')
      })

      it('returns the correct string for Thursday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 4)) === 'Huw')
      })

      it('returns the correct string for Friday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 5)) === 'Biy')
      })

      it('returns the correct string for Saturday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 6)) === 'Sab')
      })
    })

    describe('dddd', function () {
      it('returns the correct string for Sunday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 7)) === 'Linggo')
      })

      it('returns the correct string for Monday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 1)) === 'Lunes')
      })

      it('returns the correct string for Tuesday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 2)) === 'Martes')
      })

      it('returns the correct string for Wednesday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 3)) === 'Miyerkules')
      })

      it('returns the correct string for Thursday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 4)) === 'Huwebes')
      })

      it('returns the correct string for Friday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 5)) === 'Biyernes')
      })

      it('returns the correct string for Saturday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 6)) === 'Sabado')
      })
    })

    describe('A', function () {
      it('returns the correct string for 1-11 a.m.', function () {
        ext_assert(_buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 1)) === 'NU')
      })

      it('returns the correct string for 12 a.m.', function () {
        ext_assert(_buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 0)) === 'NU')
      })

      it('returns the correct string for 12 p.m.', function () {
        ext_assert(_buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 12)) === 'NT')
      })

      it('returns the correct string for 1-5 p.m.', function () {
        ext_assert(_buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 13)) === 'NH')
      })

      it('returns the correct string for 6-11 p.m.', function () {
        ext_assert(_buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 18)) === 'NG')
      })
    })

    describe('a', function () {
      it('returns the correct string for 1-11 a.m.', function () {
        ext_assert(_buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 1)) === 'nu')
      })

      it('returns the correct string for 12 a.m.', function () {
        ext_assert(_buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 0)) === 'nu')
      })

      it('returns the correct string for 12 p.m.', function () {
        ext_assert(_buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 12)) === 'nt')
      })

      it('returns the correct string for 1-5 p.m.', function () {
        ext_assert(_buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 13)) === 'nh')
      })

      it('returns the correct string for 6-11 p.m.', function () {
        ext_assert(_buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 18)) === 'ng')
      })
    })

    describe('aa', function () {
      it('returns the correct string for 1-11 a.m.', function () {
        ext_assert(_buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 1)) === 'ng umaga')
      })

      it('returns the correct string for 12 a.m.', function () {
        ext_assert(_buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 0)) === 'ng umaga')
      })

      it('returns the correct string for 12 p.m.', function () {
        ext_assert(_buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 12)) === 'ng tanghali')
      })

      it('returns the correct string for 1-5 p.m.', function () {
        ext_assert(_buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 13)) === 'ng hapon')
      })

      it('returns the correct string for 6-11 p.m.', function () {
        ext_assert(_buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 18)) === 'ng gabi')
      })
    })

    describe('Mo', function () {
      it('returns ordinal result of M formatter', function () {
        ext_assert(_buildFormatLocale().formatters.Mo(null, {M: function () { return 1 }}) === 'ika-1')
        ext_assert(_buildFormatLocale().formatters.Mo(null, {M: function () { return 2 }}) === 'ika-2')
        ext_assert(_buildFormatLocale().formatters.Mo(null, {M: function () { return 3 }}) === 'ika-3')
        ext_assert(_buildFormatLocale().formatters.Mo(null, {M: function () { return 10 }}) === 'ika-10')
        ext_assert(_buildFormatLocale().formatters.Mo(null, {M: function () { return 20 }}) === 'ika-20')
        ext_assert(_buildFormatLocale().formatters.Mo(null, {M: function () { return 30 }}) === 'ika-30')
        ext_assert(_buildFormatLocale().formatters.Mo(null, {M: function () { return 100 }}) === 'ika-100')
        ext_assert(_buildFormatLocale().formatters.Mo(null, {M: function () { return 700 }}) === 'ika-700')
      })
    })

    describe('Do', function () {
      it('returns ordinal result of D formatter', function () {
        ext_assert(_buildFormatLocale().formatters.Do(null, {D: function () { return 1 }}) === 'ika-1')
        ext_assert(_buildFormatLocale().formatters.Do(null, {D: function () { return 2 }}) === 'ika-2')
        ext_assert(_buildFormatLocale().formatters.Do(null, {D: function () { return 3 }}) === 'ika-3')
        ext_assert(_buildFormatLocale().formatters.Do(null, {D: function () { return 10 }}) === 'ika-10')
        ext_assert(_buildFormatLocale().formatters.Do(null, {D: function () { return 20 }}) === 'ika-20')
        ext_assert(_buildFormatLocale().formatters.Do(null, {D: function () { return 30 }}) === 'ika-30')
        ext_assert(_buildFormatLocale().formatters.Do(null, {D: function () { return 100 }}) === 'ika-100')
        ext_assert(_buildFormatLocale().formatters.Do(null, {D: function () { return 700 }}) === 'ika-700')
      })
    })

    describe('DDDo', function () {
      it('returns ordinal result of DDD formatter', function () {
        ext_assert(_buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 1 }}) === 'ika-1')
        ext_assert(_buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 2 }}) === 'ika-2')
        ext_assert(_buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 3 }}) === 'ika-3')
        ext_assert(_buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 10 }}) === 'ika-10')
        ext_assert(_buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 20 }}) === 'ika-20')
        ext_assert(_buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 30 }}) === 'ika-30')
        ext_assert(_buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 100 }}) === 'ika-100')
        ext_assert(_buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 700 }}) === 'ika-700')
      })
    })

    describe('do', function () {
      it('returns ordinal result of d formatter', function () {
        ext_assert(_buildFormatLocale().formatters.do(null, {d: function () { return 1 }}) === 'ika-1')
        ext_assert(_buildFormatLocale().formatters.do(null, {d: function () { return 2 }}) === 'ika-2')
        ext_assert(_buildFormatLocale().formatters.do(null, {d: function () { return 3 }}) === 'ika-3')
        ext_assert(_buildFormatLocale().formatters.do(null, {d: function () { return 10 }}) === 'ika-10')
        ext_assert(_buildFormatLocale().formatters.do(null, {d: function () { return 20 }}) === 'ika-20')
        ext_assert(_buildFormatLocale().formatters.do(null, {d: function () { return 30 }}) === 'ika-30')
        ext_assert(_buildFormatLocale().formatters.do(null, {d: function () { return 100 }}) === 'ika-100')
        ext_assert(_buildFormatLocale().formatters.do(null, {d: function () { return 700 }}) === 'ika-700')
      })
    })

    describe('Qo', function () {
      it('returns ordinal result of Q formatter', function () {
        ext_assert(_buildFormatLocale().formatters.Qo(null, {Q: function () { return 1 }}) === 'ika-1')
        ext_assert(_buildFormatLocale().formatters.Qo(null, {Q: function () { return 2 }}) === 'ika-2')
        ext_assert(_buildFormatLocale().formatters.Qo(null, {Q: function () { return 3 }}) === 'ika-3')
        ext_assert(_buildFormatLocale().formatters.Qo(null, {Q: function () { return 10 }}) === 'ika-10')
        ext_assert(_buildFormatLocale().formatters.Qo(null, {Q: function () { return 20 }}) === 'ika-20')
        ext_assert(_buildFormatLocale().formatters.Qo(null, {Q: function () { return 30 }}) === 'ika-30')
        ext_assert(_buildFormatLocale().formatters.Qo(null, {Q: function () { return 100 }}) === 'ika-100')
        ext_assert(_buildFormatLocale().formatters.Qo(null, {Q: function () { return 700 }}) === 'ika-700')
      })
    })

    describe('Wo', function () {
      it('returns ordinal result of W formatter', function () {
        ext_assert(_buildFormatLocale().formatters.Wo(null, {W: function () { return 1 }}) === 'ika-1')
        ext_assert(_buildFormatLocale().formatters.Wo(null, {W: function () { return 2 }}) === 'ika-2')
        ext_assert(_buildFormatLocale().formatters.Wo(null, {W: function () { return 3 }}) === 'ika-3')
        ext_assert(_buildFormatLocale().formatters.Wo(null, {W: function () { return 10 }}) === 'ika-10')
        ext_assert(_buildFormatLocale().formatters.Wo(null, {W: function () { return 20 }}) === 'ika-20')
        ext_assert(_buildFormatLocale().formatters.Wo(null, {W: function () { return 30 }}) === 'ika-30')
        ext_assert(_buildFormatLocale().formatters.Wo(null, {W: function () { return 100 }}) === 'ika-100')
        ext_assert(_buildFormatLocale().formatters.Wo(null, {W: function () { return 700 }}) === 'ika-700')
      })
    })
  })

  describe('formattingTokensRegExp property', function () {
    it('is an instance of RegExp', function () {
      ext_assert(_buildFormatLocale().formattingTokensRegExp instanceof RegExp)
    })
  })
})
