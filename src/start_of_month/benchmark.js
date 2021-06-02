import ext_moment from "moment";
import imp_startOfMonth from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var startOfMonth = imp_startOfMonth
var moment = ext_moment

suite('startOfMonth', function () {
  benchmark('date-fns', function () {
    return startOfMonth(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.startOf('month')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
