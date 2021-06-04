import ext_assert from "power-assert";
import { buildFormatLocale as _buildFormatLocale } from "./";

describe('pt locale > buildFormatLocale', function () {
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
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 1)) === 'fev')
      })

      it('returns the correct string for March', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 2)) === 'mar')
      })

      it('returns the correct string for April', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2015, 3)) === 'abr')
      })

      it('returns the correct string for May', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 4)) === 'mai')
      })

      it('returns the correct string for June', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 5)) === 'jun')
      })

      it('returns the correct string for July', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 6)) === 'jul')
      })

      it('returns the correct string for August', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 7)) === 'ago')
      })

      it('returns the correct string for September', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 8)) === 'set')
      })

      it('returns the correct string for October', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 9)) === 'out')
      })

      it('returns the correct string for November', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 10)) === 'nov')
      })

      it('returns the correct string for December', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 11)) === 'dez')
      })
    })

    describe('MMMM', function () {
      it('returns the correct string for January', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 0)) === 'janeiro')
      })

      it('returns the correct string for February', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 1)) === 'fevereiro')
      })

      it('returns the correct string for March', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 2)) === 'março')
      })

      it('returns the correct string for April', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2015, 3)) === 'abril')
      })

      it('returns the correct string for May', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 4)) === 'maio')
      })

      it('returns the correct string for June', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 5)) === 'junho')
      })

      it('returns the correct string for July', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 6)) === 'julho')
      })

      it('returns the correct string for August', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 7)) === 'agosto')
      })

      it('returns the correct string for September', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 8)) === 'setembro')
      })

      it('returns the correct string for October', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 9)) === 'outubro')
      })

      it('returns the correct string for November', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 10)) === 'novembro')
      })

      it('returns the correct string for December', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 11)) === 'dezembro')
      })
    })

    describe('dd', function () {
      it('returns the correct string for Sunday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 7)) === 'do')
      })

      it('returns the correct string for Monday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 1)) === 'se')
      })

      it('returns the correct string for Tuesday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 2)) === 'te')
      })

      it('returns the correct string for Wednesday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 3)) === 'qa')
      })

      it('returns the correct string for Thursday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 4)) === 'qi')
      })

      it('returns the correct string for Friday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 5)) === 'se')
      })

      it('returns the correct string for Saturday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 6)) === 'sa')
      })
    })

    describe('ddd', function () {
      it('returns the correct string for Sunday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 7)) === 'dom')
      })

      it('returns the correct string for Monday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 1)) === 'seg')
      })

      it('returns the correct string for Tuesday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 2)) === 'ter')
      })

      it('returns the correct string for Wednesday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 3)) === 'qua')
      })

      it('returns the correct string for Thursday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 4)) === 'qui')
      })

      it('returns the correct string for Friday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 5)) === 'sex')
      })

      it('returns the correct string for Saturday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 6)) === 'sáb')
      })
    })

    describe('dddd', function () {
      it('returns the correct string for Sunday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 7)) === 'domingo')
      })

      it('returns the correct string for Monday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 1)) === 'segunda-feira')
      })

      it('returns the correct string for Tuesday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 2)) === 'terça-feira')
      })

      it('returns the correct string for Wednesday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 3)) === 'quarta-feira')
      })

      it('returns the correct string for Thursday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 4)) === 'quinta-feira')
      })

      it('returns the correct string for Friday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 5)) === 'sexta-feira')
      })

      it('returns the correct string for Saturday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 6)) === 'sábado')
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
        ext_assert(_buildFormatLocale().formatters.Mo(null, {M: function () { return 1 }}) === '1º')
        ext_assert(_buildFormatLocale().formatters.Mo(null, {M: function () { return 2 }}) === '2º')
        ext_assert(_buildFormatLocale().formatters.Mo(null, {M: function () { return 3 }}) === '3º')
        ext_assert(_buildFormatLocale().formatters.Mo(null, {M: function () { return 11 }}) === '11º')
        ext_assert(_buildFormatLocale().formatters.Mo(null, {M: function () { return 101 }}) === '101º')
        ext_assert(_buildFormatLocale().formatters.Mo(null, {M: function () { return 111 }}) === '111º')
      })
    })

    describe('Do', function () {
      it('returns ordinal result of D formatter', function () {
        ext_assert(_buildFormatLocale().formatters.Do(null, {D: function () { return 1 }}) === '1º')
        ext_assert(_buildFormatLocale().formatters.Do(null, {D: function () { return 2 }}) === '2º')
        ext_assert(_buildFormatLocale().formatters.Do(null, {D: function () { return 3 }}) === '3º')
        ext_assert(_buildFormatLocale().formatters.Do(null, {D: function () { return 11 }}) === '11º')
        ext_assert(_buildFormatLocale().formatters.Do(null, {D: function () { return 101 }}) === '101º')
        ext_assert(_buildFormatLocale().formatters.Do(null, {D: function () { return 111 }}) === '111º')
      })
    })

    describe('DDDo', function () {
      it('returns ordinal result of DDD formatter', function () {
        ext_assert(_buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 1 }}) === '1º')
        ext_assert(_buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 2 }}) === '2º')
        ext_assert(_buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 3 }}) === '3º')
        ext_assert(_buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 11 }}) === '11º')
        ext_assert(_buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 101 }}) === '101º')
        ext_assert(_buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 111 }}) === '111º')
      })
    })

    describe('do', function () {
      it('returns ordinal result of d formatter', function () {
        ext_assert(_buildFormatLocale().formatters.do(null, {d: function () { return 1 }}) === '1º')
        ext_assert(_buildFormatLocale().formatters.do(null, {d: function () { return 2 }}) === '2º')
        ext_assert(_buildFormatLocale().formatters.do(null, {d: function () { return 3 }}) === '3º')
        ext_assert(_buildFormatLocale().formatters.do(null, {d: function () { return 11 }}) === '11º')
        ext_assert(_buildFormatLocale().formatters.do(null, {d: function () { return 101 }}) === '101º')
        ext_assert(_buildFormatLocale().formatters.do(null, {d: function () { return 111 }}) === '111º')
      })
    })

    describe('Qo', function () {
      it('returns ordinal result of Q formatter', function () {
        ext_assert(_buildFormatLocale().formatters.Qo(null, {Q: function () { return 1 }}) === '1º')
        ext_assert(_buildFormatLocale().formatters.Qo(null, {Q: function () { return 2 }}) === '2º')
        ext_assert(_buildFormatLocale().formatters.Qo(null, {Q: function () { return 3 }}) === '3º')
        ext_assert(_buildFormatLocale().formatters.Qo(null, {Q: function () { return 11 }}) === '11º')
        ext_assert(_buildFormatLocale().formatters.Qo(null, {Q: function () { return 101 }}) === '101º')
        ext_assert(_buildFormatLocale().formatters.Qo(null, {Q: function () { return 111 }}) === '111º')
      })
    })

    describe('Wo', function () {
      it('returns ordinal result of W formatter', function () {
        ext_assert(_buildFormatLocale().formatters.Wo(null, {W: function () { return 1 }}) === '1º')
        ext_assert(_buildFormatLocale().formatters.Wo(null, {W: function () { return 2 }}) === '2º')
        ext_assert(_buildFormatLocale().formatters.Wo(null, {W: function () { return 3 }}) === '3º')
        ext_assert(_buildFormatLocale().formatters.Wo(null, {W: function () { return 11 }}) === '11º')
        ext_assert(_buildFormatLocale().formatters.Wo(null, {W: function () { return 101 }}) === '101º')
        ext_assert(_buildFormatLocale().formatters.Wo(null, {W: function () { return 111 }}) === '111º')
      })
    })
  })

  describe('formattingTokensRegExp property', function () {
    it('is an instance of RegExp', function () {
      ext_assert(_buildFormatLocale().formattingTokensRegExp instanceof RegExp)
    })
  })
})
