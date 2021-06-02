import ext_moment from "moment";
import imp_startOfHour from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var startOfHour = imp_startOfHour
var moment = ext_moment

suite('startOfHour', function () {
  benchmark('date-fns', function () {
    return startOfHour(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.startOf('hour')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
