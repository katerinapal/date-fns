import ext_moment from "moment";
import imp_isDate from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isDate = imp_isDate
var moment = ext_moment

suite('isDate', function () {
  benchmark('date-fns', function () {
    return isDate(this.string)
  })

  benchmark('Moment.js', function () {
    return moment.isDate(this.string)
  })
}, {
  setup: function () {
    this.string = '123'
  }
})
