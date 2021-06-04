import ext_assert from "power-assert";
import { indexjs as nlLocale } from "./";

describe('nl locale', function () {
  it('exports distanceInWords object', function () {
    ext_assert(typeof nlLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    ext_assert(typeof nlLocale.format === 'object')
  })
})
