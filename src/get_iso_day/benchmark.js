import ext_moment from "moment";
import imp_getISODay from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var getISODay = imp_getISODay
var moment = ext_moment

suite('getISODay', function () {
  benchmark('date-fns', function () {
    return getISODay(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.isoWeekday()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
