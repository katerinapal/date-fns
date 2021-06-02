import ext_moment from "moment";
import imp_startOfWeek from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var startOfWeek = imp_startOfWeek
var moment = ext_moment

suite('startOfWeek', function () {
  benchmark('date-fns', function () {
    return startOfWeek(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.startOf('week')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
