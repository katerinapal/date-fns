import ext_moment from "moment";
import imp_endOfMonth from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var endOfMonth = imp_endOfMonth
var moment = ext_moment

suite('endOfMonth', function () {
  benchmark('date-fns', function () {
    return endOfMonth(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.endOf('month')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
