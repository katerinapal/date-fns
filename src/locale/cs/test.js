import ext_assert from "power-assert";
import { indexjs as csLocale } from "./";

describe('cs locale', function () {
  it('exports distanceInWords object', function () {
    ext_assert(typeof csLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    ext_assert(typeof csLocale.format === 'object')
  })
})
