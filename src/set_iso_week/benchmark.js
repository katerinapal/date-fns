import ext_moment from "moment";
import imp_setISOWeek from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var setISOWeek = imp_setISOWeek
var moment = ext_moment

suite('setISOWeek', function () {
  benchmark('date-fns', function () {
    return setISOWeek(this.date, 10)
  })

  benchmark('Moment.js', function () {
    return this.moment.isoWeek(10)
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
