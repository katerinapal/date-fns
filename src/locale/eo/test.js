import ext_assert from "power-assert";
import { indexjs as eoLocale } from "./";

describe('eo locale', function () {
  it('exports distanceInWords object', function () {
    ext_assert(typeof eoLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    ext_assert(typeof eoLocale.format === 'object')
  })
})
