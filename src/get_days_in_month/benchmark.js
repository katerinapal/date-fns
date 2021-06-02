import ext_moment from "moment";
import imp_getDaysInMonth from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var getDaysInMonth = imp_getDaysInMonth
var moment = ext_moment

suite('getDaysInMonth', function () {
  benchmark('date-fns', function () {
    return getDaysInMonth(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.daysInMonth()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
