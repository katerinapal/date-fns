import ext_assert from "power-assert";
import { distanceInWordsStrict as _distanceInWordsStrict } from "./";

describe('distanceInWordsStrict', function () {
  describe('seconds', function () {
    context('when no unit is set', function () {
      it('0 seconds', function () {
        var result = _distanceInWordsStrict(
          new Date(1986, 3, 4, 10, 32, 5),
          new Date(1986, 3, 4, 10, 32, 5)
        )
        ext_assert(result === '0 seconds')
      })

      it('5 seconds', function () {
        var result = _distanceInWordsStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 5)
        )
        ext_assert(result === '5 seconds')
      })
    })
  })

  describe('minutes', function () {
    it('1 minute', function () {
      var result = _distanceInWordsStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 33, 0)
      )
      ext_assert(result === '1 minute')
    })

    it('n minutes', function () {
      var result = _distanceInWordsStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 35, 0)
      )
      ext_assert(result === '3 minutes')
    })
  })

  describe('hours', function () {
    it('1 hour', function () {
      var result = _distanceInWordsStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 11, 32, 0)
      )
      ext_assert(result === '1 hour')
    })

    it('n hours', function () {
      var result = _distanceInWordsStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 13, 32, 0)
      )
      ext_assert(result === '3 hours')
    })
  })

  describe('days', function () {
    it('1 day', function () {
      var result = _distanceInWordsStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 5, 10, 32, 0)
      )
      ext_assert(result === '1 day')
    })

    it('n days', function () {
      var result = _distanceInWordsStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 7, 10, 32, 0)
      )
      ext_assert(result === '3 days')
    })
  })

  describe('months', function () {
    it('1 month', function () {
      var result = _distanceInWordsStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 4, 4, 10, 32, 0)
      )
      ext_assert(result === '1 month')
    })

    it('n months', function () {
      var result = _distanceInWordsStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 6, 4, 10, 32, 0)
      )
      ext_assert(result === '3 months')
    })
  })

  describe('years', function () {
    it('1 year', function () {
      var result = _distanceInWordsStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1987, 3, 4, 10, 32, 0)
      )
      ext_assert(result === '1 year')
    })

    it('n years', function () {
      var result = _distanceInWordsStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1991, 3, 4, 10, 32, 0)
      )
      ext_assert(result === '5 years')
    })
  })

  describe('when the unit option is supplied', function () {
    context('s', function () {
      it('0 seconds', function () {
        var result = _distanceInWordsStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 0),
          {unit: 's'}
        )
        ext_assert(result === '0 seconds')
      })

      it('5 seconds', function () {
        var result = _distanceInWordsStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 5),
          {unit: 's'}
        )
        ext_assert(result === '5 seconds')
      })

      it('120 seconds', function () {
        var result = _distanceInWordsStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 34, 0),
          {unit: 's'}
        )
        ext_assert(result === '120 seconds')
      })
    })

    context('m', function () {
      it('0 minutes', function () {
        var result = _distanceInWordsStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 0),
          {unit: 'm'}
        )
        ext_assert(result === '0 minutes')
      })

      it('5 minutes', function () {
        var result = _distanceInWordsStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 37, 0),
          {unit: 'm'}
        )
        ext_assert(result === '5 minutes')
      })

      it('120 minutes', function () {
        var result = _distanceInWordsStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 12, 32, 0),
          {unit: 'm'}
        )
        ext_assert(result === '120 minutes')
      })
    })
    context('h', function () {
      it('0 hours', function () {
        var result = _distanceInWordsStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 0),
          {unit: 'h'}
        )
        ext_assert(result === '0 hours')
      })

      it('5 hours', function () {
        var result = _distanceInWordsStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 15, 32, 0),
          {unit: 'h'}
        )
        ext_assert(result === '5 hours')
      })

      it('48 hours', function () {
        var result = _distanceInWordsStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 6, 10, 32, 0),
          {unit: 'h'}
        )
        ext_assert(result === '48 hours')
      })
    })
    context('d', function () {
      it('0 days', function () {
        var result = _distanceInWordsStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 0),
          {unit: 'd'}
        )
        ext_assert(result === '0 days')
      })

      it('5 days', function () {
        var result = _distanceInWordsStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 9, 10, 32, 0),
          {unit: 'd'}
        )
        ext_assert(result === '5 days')
      })

      it('60 days', function () {
        var result = _distanceInWordsStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 5, 3, 10, 32, 0),
          {unit: 'd'}
        )
        ext_assert(result === '60 days')
      })
    })
    context('M', function () {
      it('0 months', function () {
        var result = _distanceInWordsStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 0),
          {unit: 'M'}
        )
        ext_assert(result === '0 months')
      })

      it('5 months', function () {
        var result = _distanceInWordsStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 7, 4, 10, 32, 0),
          {unit: 'M'}
        )
        ext_assert(result === '4 months')
      })

      it('24 months', function () {
        var result = _distanceInWordsStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1988, 3, 4, 10, 32, 0),
          {unit: 'M'}
        )
        ext_assert(result === '24 months')
      })
    })
    context('Y', function () {
      it('0 years', function () {
        var result = _distanceInWordsStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 0),
          {unit: 'Y'}
        )
        ext_assert(result === '0 years')
      })

      it('5 years', function () {
        var result = _distanceInWordsStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1991, 3, 4, 15, 32, 0),
          {unit: 'Y'}
        )
        ext_assert(result === '5 years')
      })
    })
  })

  it('accepts strings', function () {
    var result = _distanceInWordsStrict(
      new Date(1986, 3, 4, 10, 32, 0).toISOString(),
      new Date(1986, 3, 4, 11, 32, 0).toISOString()
    )
    ext_assert(result === '1 hour')
  })

  it('accepts timestamps', function () {
    var result = _distanceInWordsStrict(
      new Date(1986, 3, 4, 10, 32, 0).getTime(),
      new Date(1986, 3, 4, 11, 32, 0).getTime()
    )
    ext_assert(result === '1 hour')
  })

  describe('when the addSuffix option is true', function () {
    it('adds a past suffix', function () {
      var result = _distanceInWordsStrict(
        new Date(1986, 3, 4, 10, 32, 25),
        new Date(1986, 3, 4, 10, 32, 0),
        {addSuffix: true}
      )
      ext_assert(result === '25 seconds ago')
    })

    it('adds a future suffix', function () {
      var result = _distanceInWordsStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 11, 32, 0),
        {addSuffix: true}
      )
      ext_assert(result === 'in 1 hour')
    })
  })

  describe('when the partialMethod option is supplied', function () {
    it('default is "floor"', function () {
      var result = _distanceInWordsStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 33, 59)
      )
      ext_assert(result === '1 minute')
    })

    it('"floor"', function () {
      var result = _distanceInWordsStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 33, 59),
        {partialMethod: 'floor'}
      )
      ext_assert(result === '1 minute')
    })

    it('"ceil"', function () {
      var result = _distanceInWordsStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 33, 1),
        {partialMethod: 'ceil'}
      )
      ext_assert(result === '2 minutes')
    })

    it('"round" (down)', function () {
      var result = _distanceInWordsStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 33, 29),
        {partialMethod: 'round'}
      )
      ext_assert(result === '1 minute')
    })

    it('"round" (up)', function () {
      var result = _distanceInWordsStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 33, 30),
        {partialMethod: 'round'}
      )
      ext_assert(result === '2 minutes')
    })
  })

  describe('implicit conversion of options', function () {
    it('`options.unit`', function () {
      // eslint-disable-next-line no-new-wrappers
      var unit = new String('Y')

      var result = _distanceInWordsStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 32, 0),
        // $ExpectedMistake
        {unit: unit}
      )
      ext_assert(result === '0 years')
    })

    it('`options.addSuffix`', function () {
      var result = _distanceInWordsStrict(
        new Date(1986, 3, 4, 10, 32, 25),
        new Date(1986, 3, 4, 10, 32, 0),
        // $ExpectedMistake
        {addSuffix: 1}
      )
      ext_assert(result === '25 seconds ago')
    })

    it('`options.ceil`', function () {
      // eslint-disable-next-line no-new-wrappers
      var partialMethod = new String('ceil')

      var result = _distanceInWordsStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 33, 1),
        // $ExpectedMistake
        {partialMethod: partialMethod}
      )
      ext_assert(result === '2 minutes')
    })
  })

  describe('custom locale', function () {
    it('can be passed to the function', function () {
      function localize (token, count, options) {
        ext_assert(token === 'xSeconds')
        ext_assert(count === 25)
        ext_assert(options.addSuffix === true)
        ext_assert(options.comparison < 0)
        return 'It works!'
      }

      var customLocale = {
        distanceInWords: {
          localize: localize
        }
      }

      var result = _distanceInWordsStrict(
        new Date(1986, 3, 4, 10, 32, 25),
        new Date(1986, 3, 4, 10, 32, 0),
        {addSuffix: true, locale: customLocale}
      )

      ext_assert(result === 'It works!')
    })

    context('does not contain `distanceInWords` property', function () {
      it('fallbacks to enLocale', function () {
        var customLocale = {}
        var result = _distanceInWordsStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 37, 0),
          {unit: 'm', locale: customLocale}
        )
        ext_assert(result === '5 minutes')
      })
    })

    context('does not contain `distanceInWords.localize` property', function () {
      it('fallbacks to enLocale', function () {
        var customLocale = {distanceInWords: {}}
        var result = _distanceInWordsStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 37, 0),
          {unit: 'm', locale: customLocale}
        )
        ext_assert(result === '5 minutes')
      })
    })
  })
})
