import ext_assert from "power-assert";
import { indexjs as koLocale } from "./";

describe('ko locale', function () {
  it('exports distanceInWords object', function () {
    ext_assert(typeof koLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    ext_assert(typeof koLocale.format === 'object')
  })
})
