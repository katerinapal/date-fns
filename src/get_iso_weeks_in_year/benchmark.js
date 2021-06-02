import ext_moment from "moment";
import imp_getISOWeeksInYear from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var getISOWeeksInYear = imp_getISOWeeksInYear
var moment = ext_moment

suite('getISOWeeksInYear', function () {
  benchmark('date-fns', function () {
    return getISOWeeksInYear(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.isoWeeksInYear()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
