import ext_assert from "power-assert";
import { buildFormatLocale as _buildFormatLocale } from "./";

describe('ru locale > buildFormatLocale', function () {
  it('returns an object', function () {
    ext_assert(typeof _buildFormatLocale() === 'object')
  })

  describe('formatters property', function () {
    it('is an object', function () {
      ext_assert(typeof _buildFormatLocale().formatters === 'object')
    })

    describe('MMM', function () {
      it('returns the correct string for January', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 0)) === 'янв.')
      })

      it('returns the correct string for February', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 1)) === 'фев.')
      })

      it('returns the correct string for March', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 2)) === 'март')
      })

      it('returns the correct string for April', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2015, 3)) === 'апр.')
      })

      it('returns the correct string for May', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 4)) === 'май')
      })

      it('returns the correct string for June', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 5)) === 'июнь')
      })

      it('returns the correct string for July', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 6)) === 'июль')
      })

      it('returns the correct string for August', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 7)) === 'авг.')
      })

      it('returns the correct string for September', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 8)) === 'сент.')
      })

      it('returns the correct string for October', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 9)) === 'окт.')
      })

      it('returns the correct string for November', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 10)) === 'нояб.')
      })

      it('returns the correct string for December', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 11)) === 'дек.')
      })
    })

    describe('MMMM', function () {
      it('returns the correct string for January', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 0)) === 'январь')
      })

      it('returns the correct string for February', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 1)) === 'февраль')
      })

      it('returns the correct string for March', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 2)) === 'март')
      })

      it('returns the correct string for April', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2015, 3)) === 'апрель')
      })

      it('returns the correct string for May', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 4)) === 'май')
      })

      it('returns the correct string for June', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 5)) === 'июнь')
      })

      it('returns the correct string for July', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 6)) === 'июль')
      })

      it('returns the correct string for August', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 7)) === 'август')
      })

      it('returns the correct string for September', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 8)) === 'сентябрь')
      })

      it('returns the correct string for October', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 9)) === 'октябрь')
      })

      it('returns the correct string for November', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 10)) === 'ноябрь')
      })

      it('returns the correct string for December', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 11)) === 'декабрь')
      })
    })

    describe('dd', function () {
      it('returns the correct string for Sunday', function () {
        ext_assert(_buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 7)) === 'вс')
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
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 7)) === 'вск')
      })

      it('returns the correct string for Monday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 1)) === 'пнд')
      })

      it('returns the correct string for Tuesday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 2)) === 'втр')
      })

      it('returns the correct string for Wednesday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 3)) === 'срд')
      })

      it('returns the correct string for Thursday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 4)) === 'чтв')
      })

      it('returns the correct string for Friday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 5)) === 'птн')
      })

      it('returns the correct string for Saturday', function () {
        ext_assert(_buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 6)) === 'суб')
      })
    })

    describe('dddd', function () {
      it('returns the correct string for Sunday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 7)) === 'воскресенье')
      })

      it('returns the correct string for Monday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 1)) === 'понедельник')
      })

      it('returns the correct string for Tuesday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 2)) === 'вторник')
      })

      it('returns the correct string for Wednesday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 3)) === 'среда')
      })

      it('returns the correct string for Thursday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 4)) === 'четверг')
      })

      it('returns the correct string for Friday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 5)) === 'пятница')
      })

      it('returns the correct string for Saturday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 6)) === 'суббота')
      })
    })

    describe('A', function () {
      it('returns the correct string for 12-3 a.m.', function () {
        [0, 1, 2, 3].forEach(function (hours) {
          ext_assert(_buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, hours)) === 'ночи')
        })
      })

      it('returns the correct string for 4-11 a.m.', function () {
        [4, 5, 6, 7, 8, 9, 10, 11].forEach(function (hours) {
          ext_assert(_buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, hours)) === 'утра')
        })
      })

      it('returns the correct string for 12-4 p.m.', function () {
        [12, 13, 14, 15, 16].forEach(function (hours) {
          ext_assert(_buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, hours)) === 'дня')
        })
      })

      it('returns the correct string for 5-11 p.m.', function () {
        [17, 18, 19, 20, 21, 22, 23].forEach(function (hours) {
          ext_assert(_buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, hours)) === 'вечера')
        })
      })
    })

    describe('a', function () {
      it('returns the correct string for 12-3 a.m.', function () {
        [0, 1, 2, 3].forEach(function (hours) {
          ext_assert(_buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, hours)) === 'ночи')
        })
      })

      it('returns the correct string for 4-11 a.m.', function () {
        [4, 5, 6, 7, 8, 9, 10, 11].forEach(function (hours) {
          ext_assert(_buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, hours)) === 'утра')
        })
      })

      it('returns the correct string for 12-4 p.m.', function () {
        [12, 13, 14, 15, 16].forEach(function (hours) {
          ext_assert(_buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, hours)) === 'дня')
        })
      })

      it('returns the correct string for 5-11 p.m.', function () {
        [17, 18, 19, 20, 21, 22, 23].forEach(function (hours) {
          ext_assert(_buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, hours)) === 'вечера')
        })
      })
    })

    describe('aa', function () {
      it('returns the correct string for 12-3 a.m.', function () {
        [0, 1, 2, 3].forEach(function (hours) {
          ext_assert(_buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, hours)) === 'ночи')
        })
      })

      it('returns the correct string for 4-11 a.m.', function () {
        [4, 5, 6, 7, 8, 9, 10, 11].forEach(function (hours) {
          ext_assert(_buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, hours)) === 'утра')
        })
      })

      it('returns the correct string for 12-4 p.m.', function () {
        [12, 13, 14, 15, 16].forEach(function (hours) {
          ext_assert(_buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, hours)) === 'дня')
        })
      })

      it('returns the correct string for 5-11 p.m.', function () {
        [17, 18, 19, 20, 21, 22, 23].forEach(function (hours) {
          ext_assert(_buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, hours)) === 'вечера')
        })
      })
    })

    describe('Mo', function () {
      it('returns ordinal result of M formatter', function () {
        ext_assert(_buildFormatLocale().formatters.Mo(null, {M: function () { return 1 }}) === '1-й')
        ext_assert(_buildFormatLocale().formatters.Mo(null, {M: function () { return 2 }}) === '2-й')
        ext_assert(_buildFormatLocale().formatters.Mo(null, {M: function () { return 3 }}) === '3-й')
      })
    })

    describe('Do', function () {
      it('returns ordinal result of D formatter', function () {
        ext_assert(_buildFormatLocale().formatters.Do(null, {D: function () { return 1 }}) === '1-е')
        ext_assert(_buildFormatLocale().formatters.Do(null, {D: function () { return 2 }}) === '2-е')
        ext_assert(_buildFormatLocale().formatters.Do(null, {D: function () { return 3 }}) === '3-е')
      })
    })

    describe('DDDo', function () {
      it('returns ordinal result of DDD formatter', function () {
        ext_assert(_buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 1 }}) === '1-й')
        ext_assert(_buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 2 }}) === '2-й')
        ext_assert(_buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 3 }}) === '3-й')
      })
    })

    describe('do', function () {
      it('returns ordinal result of d formatter', function () {
        ext_assert(_buildFormatLocale().formatters.do(null, {d: function () { return 1 }}) === '1-й')
        ext_assert(_buildFormatLocale().formatters.do(null, {d: function () { return 2 }}) === '2-й')
        ext_assert(_buildFormatLocale().formatters.do(null, {d: function () { return 3 }}) === '3-й')
      })
    })

    describe('Qo', function () {
      it('returns ordinal result of Q formatter', function () {
        ext_assert(_buildFormatLocale().formatters.Qo(null, {Q: function () { return 1 }}) === '1-й')
        ext_assert(_buildFormatLocale().formatters.Qo(null, {Q: function () { return 2 }}) === '2-й')
        ext_assert(_buildFormatLocale().formatters.Qo(null, {Q: function () { return 3 }}) === '3-й')
      })
    })

    describe('Wo', function () {
      it('returns ordinal result of W formatter', function () {
        ext_assert(_buildFormatLocale().formatters.Wo(null, {W: function () { return 1 }}) === '1-я')
        ext_assert(_buildFormatLocale().formatters.Wo(null, {W: function () { return 2 }}) === '2-я')
        ext_assert(_buildFormatLocale().formatters.Wo(null, {W: function () { return 3 }}) === '3-я')
      })
    })

    describe('D MMMM', function () {
      it('returns a day and a month in the genitive case', function () {
        var months = [
          'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
          'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
        ]
        var formatters = {
          D: function () {
            return 5
          }
        }
        months.forEach(function (month, index) {
          ext_assert(_buildFormatLocale().formatters['D MMMM'](new Date(2015, index, 5), formatters) === '5 ' + month)
        })
      })
    })

    describe('Do MMMM', function () {
      it('returns an ordinal day and a month in the genitive case', function () {
        var months = [
          'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
          'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
        ]
        var formatters = {
          D: function () {
            return 3
          }
        }
        months.forEach(function (month, index) {
          ext_assert(_buildFormatLocale().formatters['Do MMMM'](new Date(2016, index, 3), formatters) === '3-е ' + month)
        })
      })
    })

    describe('DD MMMM', function () {
      it('returns a day and a month in the genitive case', function () {
        var months = [
          'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
          'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
        ]
        var formatters = {
          DD: function () {
            return '07'
          }
        }
        months.forEach(function (month, index) {
          ext_assert(_buildFormatLocale().formatters['DD MMMM'](new Date(2016, index, 7), formatters) === '07 ' + month)
        })
      })
    })
  })

  describe('formattingTokensRegExp property', function () {
    it('is an instance of RegExp', function () {
      ext_assert(_buildFormatLocale().formattingTokensRegExp instanceof RegExp)
    })
  })
})
