import ext_assert from "power-assert";
import { indexjs as arLocale } from "./";

describe('ar locale', function () {
  it('exports distanceInWords object', function () {
    ext_assert(typeof arLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    ext_assert(typeof arLocale.format === 'object')
  })
})
