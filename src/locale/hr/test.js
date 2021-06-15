import ext_assert from "power-assert";
import { indexjs as hrLocale } from "./";

describe('hr locale', function () {
  it('exports distanceInWords object', function () {
    ext_assert(typeof hrLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    ext_assert(typeof hrLocale.format === 'object')
  })
})
