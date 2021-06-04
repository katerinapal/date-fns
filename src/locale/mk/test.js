import ext_assert from "power-assert";
import { indexjs as mkLocale } from "./";

describe('mk locale', function () {
  it('exports distanceInWords object', function () {
    ext_assert(typeof mkLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    ext_assert(typeof mkLocale.format === 'object')
  })
})
