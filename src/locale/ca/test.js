import ext_assert from "power-assert";
import { indexjs as caLocale } from "./";

describe('ca locale', function () {
  it('exports distanceInWords object', function () {
    ext_assert(typeof caLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    ext_assert(typeof caLocale.format === 'object')
  })
})
