import ext_moment from "moment";
import imp_startOfMinute from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var startOfMinute = imp_startOfMinute
var moment = ext_moment

suite('startOfMinute', function () {
  benchmark('date-fns', function () {
    return startOfMinute(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.startOf('minute')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
