import ext_moment from "moment";
import imp_endOfHour from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var endOfHour = imp_endOfHour
var moment = ext_moment

suite('endOfHour', function () {
  benchmark('date-fns', function () {
    return endOfHour(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.endOf('hour')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
