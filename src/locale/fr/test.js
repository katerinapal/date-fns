import ext_assert from "power-assert";
import { indexjs as frLocale } from "./";

describe('fr locale', function () {
  it('exports distanceInWords object', function () {
    ext_assert(typeof frLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    ext_assert(typeof frLocale.format === 'object')
  })
})
