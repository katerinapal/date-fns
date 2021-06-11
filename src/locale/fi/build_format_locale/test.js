import ext_assert from "power-assert";
import { buildFormatLocale as _buildFormatLocale } from "./";

describe('fi locale > buildFormatLocale', function () {
  it('returns an object', function () {
    ext_assert(typeof _buildFormatLocale() === 'object')
  })

  describe('formatters property', function () {
    it('is an object', function () {
      ext_assert(typeof _buildFormatLocale().formatters === 'object')
    })

    describe('MMM', function () {
      it('returns the correct string for January', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 0)) === 'tammi')
      })

      it('returns the correct string for February', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 1)) === 'helmi')
      })

      it('returns the correct string for March', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 2)) === 'maalis')
      })

      it('returns the correct string for April', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2015, 3)) === 'huhti')
      })

      it('returns the correct string for May', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 4)) === 'touko')
      })

      it('returns the correct string for June', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 5)) === 'kesä')
      })

      it('returns the correct string for July', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 6)) === 'heinä')
      })

      it('returns the correct string for August', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 7)) === 'elo')
      })

      it('returns the correct string for September', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 8)) === 'syys')
      })

      it('returns the correct string for October', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 9)) === 'loka')
      })

      it('returns the correct string for November', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 10)) === 'marras')
      })

      it('returns the correct string for December', function () {
        ext_assert(_buildFormatLocale().formatters.MMM(new Date(2016, 11)) === 'joulu')
      })
    })

    describe('MMMM', function () {
      it('returns the correct string for January', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 0)) === 'tammikuu')
      })

      it('returns the correct string for February', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 1)) === 'helmikuu')
      })

      it('returns the correct string for March', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 2)) === 'maaliskuu')
      })

      it('returns the correct string for April', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2015, 3)) === 'huhtikuu')
      })

      it('returns the correct string for May', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 4)) === 'toukokuu')
      })

      it('returns the correct string for June', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 5)) === 'kesäkuu')
      })

      it('returns the correct string for July', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 6)) === 'heinäkuu')
      })

      it('returns the correct string for August', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 7)) === 'elokuu')
      })

      it('returns the correct string for September', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 8)) === 'syyskuu')
      })

      it('returns the correct string for October', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 9)) === 'lokakuu')
      })

      it('returns the correct string for November', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 10)) === 'marraskuu')
      })

      it('returns the correct string for December', function () {
        ext_assert(_buildFormatLocale().formatters.MMMM(new Date(2016, 11)) === 'joulukuu')
      })
    })

    describe('dd / ddd', function () {
      ['dd', 'ddd'].forEach(function (f) {
        it('returns the correct string for Sunday', function () {
          ext_assert(_buildFormatLocale().formatters[f](new Date(2016, 1 /* Feb */, 7)) === 'su')
        })

        it('returns the correct string for Monday', function () {
          ext_assert(_buildFormatLocale().formatters[f](new Date(2016, 1 /* Feb */, 1)) === 'ma')
        })

        it('returns the correct string for Tuesday', function () {
          ext_assert(_buildFormatLocale().formatters[f](new Date(2016, 1 /* Feb */, 2)) === 'ti')
        })

        it('returns the correct string for Wednesday', function () {
          ext_assert(_buildFormatLocale().formatters[f](new Date(2016, 1 /* Feb */, 3)) === 'ke')
        })

        it('returns the correct string for Thursday', function () {
          ext_assert(_buildFormatLocale().formatters[f](new Date(2016, 1 /* Feb */, 4)) === 'to')
        })

        it('returns the correct string for Friday', function () {
          ext_assert(_buildFormatLocale().formatters[f](new Date(2016, 1 /* Feb */, 5)) === 'pe')
        })

        it('returns the correct string for Saturday', function () {
          ext_assert(_buildFormatLocale().formatters[f](new Date(2016, 1 /* Feb */, 6)) === 'la')
        })
      })
    })

    describe('dddd', function () {
      it('returns the correct string for Sunday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 7)) === 'sunnuntai')
      })

      it('returns the correct string for Monday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 1)) === 'maanantai')
      })

      it('returns the correct string for Tuesday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 2)) === 'tiistai')
      })

      it('returns the correct string for Wednesday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 3)) === 'keskiviikko')
      })

      it('returns the correct string for Thursday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 4)) === 'torstai')
      })

      it('returns the correct string for Friday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 5)) === 'perjantai')
      })

      it('returns the correct string for Saturday', function () {
        ext_assert(_buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 6)) === 'lauantai')
      })
    })

    describe('meridiem', function () {
      ['A', 'a', 'aa'].forEach(function (formatter) {
        it(formatter + ' returns the correct string for 00:00', function () {
          ext_assert(_buildFormatLocale().formatters[formatter](new Date(2016, 1 /* Feb */, 11, 0)) === 'AP')
        })

        it(formatter + ' returns the correct string for 11:00', function () {
          ext_assert(_buildFormatLocale().formatters[formatter](new Date(2016, 1 /* Feb */, 11, 11)) === 'AP')
        })

        it(formatter + ' returns the correct string for 12:00', function () {
          ext_assert(_buildFormatLocale().formatters[formatter](new Date(2016, 1 /* Feb */, 11, 12)) === 'IP')
        })

        it(formatter + ' returns the correct string for 23:00', function () {
          ext_assert(_buildFormatLocale().formatters[formatter](new Date(2016, 1 /* Feb */, 11, 23)) === 'IP')
        })
      })
    })

    describe('ordinals', function () {
      ['Mo', 'Do', 'DDDo', 'do', 'Qo', 'Wo'].forEach(function (ordinalFormatter) {
        var formatter = ordinalFormatter.replace(/o$/, '')
        it('returns ordinal result of ' + formatter + ' formatter', function () {
          function createOptions (number) {
            var options = {}
            options[formatter] = function () {
              return number
            }
            return options
          }
          ext_assert(_buildFormatLocale().formatters[ordinalFormatter](null, createOptions(1)) === '1.')
          ext_assert(_buildFormatLocale().formatters[ordinalFormatter](null, createOptions(12)) === '12.')
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
