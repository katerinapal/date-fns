import ext_moment from "moment";
import imp_startOfYear from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var startOfYear = imp_startOfYear
var moment = ext_moment

suite('startOfYear', function () {
  benchmark('date-fns', function () {
    return startOfYear(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.startOf('year')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
