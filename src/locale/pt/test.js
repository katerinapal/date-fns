import ext_assert from "power-assert";
import { indexjs as ptLocale } from "./";

describe('pt locale', function () {
  it('exports distanceInWords object', function () {
    ext_assert(typeof ptLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    ext_assert(typeof ptLocale.format === 'object')
  })
})
