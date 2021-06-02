import ext_moment from "moment";
import imp_startOfDay from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var startOfDay = imp_startOfDay
var moment = ext_moment

suite('startOfDay', function () {
  benchmark('date-fns', function () {
    return startOfDay(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.startOf('day')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
