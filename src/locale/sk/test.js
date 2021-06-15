import ext_assert from "power-assert";
import { indexjs as skLocale } from "./";

describe('sk locale', function () {
  it('exports distanceInWords object', function () {
    ext_assert(typeof skLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    ext_assert(typeof skLocale.format === 'object')
  })
})
