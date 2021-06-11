import ext_assert from "power-assert";
import { indexjs as idLocale } from "./";

describe('id locale', function () {
  it('exports distanceInWords object', function () {
    ext_assert(typeof idLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    ext_assert(typeof idLocale.format === 'object')
  })
})
