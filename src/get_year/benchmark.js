import ext_moment from "moment";
import imp_getYear from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var getYear = imp_getYear
var moment = ext_moment

suite('getYear', function () {
  benchmark('date-fns', function () {
    return getYear(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.year()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
