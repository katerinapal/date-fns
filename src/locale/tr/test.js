import ext_assert from "power-assert";
import { indexjs as trLocale } from "./";

describe('tr locale', function () {
  it('exports distanceInWords object', function () {
    ext_assert(typeof trLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    ext_assert(typeof trLocale.format === 'object')
  })
})
