import ext_assert from "power-assert";
import { indexjs as roLocale } from "./";

describe('ro locale', function () {
  it('exports distanceInWords object', function () {
    ext_assert(typeof roLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    ext_assert(typeof roLocale.format === 'object')
  })
})
