import ext_moment from "moment";
import imp_getISOWeek from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var getISOWeek = imp_getISOWeek
var moment = ext_moment

suite('getISOWeek', function () {
  benchmark('date-fns', function () {
    return getISOWeek(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.isoWeek()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
