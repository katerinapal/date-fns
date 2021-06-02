import ext_moment from "moment";
import imp_endOfYear from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var endOfYear = imp_endOfYear
var moment = ext_moment

suite('endOfYear', function () {
  benchmark('date-fns', function () {
    return endOfYear(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.endOf('year')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
