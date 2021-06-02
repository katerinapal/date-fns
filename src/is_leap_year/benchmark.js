import ext_moment from "moment";
import imp_isLeapYear from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isLeapYear = imp_isLeapYear
var moment = ext_moment

suite('isLeapYear', function () {
  benchmark('date-fns', function () {
    return isLeapYear(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.isLeapYear()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
