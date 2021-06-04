import ext_assert from "power-assert";
import { indexjs as svLocale } from "./";

describe('sv locale', function () {
  it('exports distanceInWords object', function () {
    ext_assert(typeof svLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    ext_assert(typeof svLocale.format === 'object')
  })
})
