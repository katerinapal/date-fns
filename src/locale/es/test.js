import ext_assert from "power-assert";
import { indexjs as esLocale } from "./";

describe('es locale', function () {
  it('exports distanceInWords object', function () {
    ext_assert(typeof esLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    ext_assert(typeof esLocale.format === 'object')
  })
})
