import ext_moment from "moment";
import imp_endOfWeek from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var endOfWeek = imp_endOfWeek
var moment = ext_moment

suite('endOfWeek', function () {
  benchmark('date-fns', function () {
    return endOfWeek(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.endOf('week')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
