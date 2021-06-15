import ext_assert from "power-assert";
import { indexjs as itLocale } from "./";

describe('it locale', function () {
  it('exports distanceInWords object', function () {
    ext_assert(typeof itLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    ext_assert(typeof itLocale.format === 'object')
  })
})
