import ext_moment from "moment";
import imp_getDayOfYear from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var getDayOfYear = imp_getDayOfYear
var moment = ext_moment

suite('getDayOfYear', function () {
  benchmark('date-fns', function () {
    return getDayOfYear(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.dayOfYear()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
