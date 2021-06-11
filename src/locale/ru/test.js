import ext_assert from "power-assert";
import { indexjs as ruLocale } from "./";

describe('ru locale', function () {
  it('exports distanceInWords object', function () {
    ext_assert(typeof ruLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    ext_assert(typeof ruLocale.format === 'object')
  })
})
