import ext_assert from "power-assert";
import { indexjs as plLocale } from "./";

describe('pl locale', function () {
  it('exports distanceInWords object', function () {
    ext_assert(typeof plLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    ext_assert(typeof plLocale.format === 'object')
  })
})
