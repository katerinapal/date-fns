import ext_moment from "moment";
import imp_endOfDay from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var endOfDay = imp_endOfDay
var moment = ext_moment

suite('endOfDay', function () {
  benchmark('date-fns', function () {
    return endOfDay(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.endOf('day')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
