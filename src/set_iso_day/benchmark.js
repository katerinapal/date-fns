import ext_moment from "moment";
import imp_setISODay from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var setISODay = imp_setISODay
var moment = ext_moment

suite('setISODay', function () {
  benchmark('date-fns', function () {
    return setISODay(this.date, 5)
  })

  benchmark('Moment.js', function () {
    return this.moment.isoWeekday(5)
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
