import ext_assert from "power-assert";
import { indexjs as zhCnLocale } from "./";

describe('zh_CN locale', function () {
  it('exports distanceInWords object', function () {
    ext_assert(typeof zhCnLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    ext_assert(typeof zhCnLocale.format === 'object')
  })
})
