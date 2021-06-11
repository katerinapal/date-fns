import ext_assert from "power-assert";
import { indexjs as elLocale } from "./";

describe('el locale', function () {
  it('exports distanceInWords object', function () {
    ext_assert(typeof elLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    ext_assert(typeof elLocale.format === 'object')
  })
})
