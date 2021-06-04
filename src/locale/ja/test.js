import ext_assert from "power-assert";
import { indexjs as jaLocale } from "./";

describe('ja locale', function () {
  it('exports distanceInWords object', function () {
    ext_assert(typeof jaLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    ext_assert(typeof jaLocale.format === 'object')
  })
})
