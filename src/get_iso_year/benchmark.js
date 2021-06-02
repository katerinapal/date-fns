import ext_moment from "moment";
import imp_getISOYear from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var getISOYear = imp_getISOYear
var moment = ext_moment

suite('getISOYear', function () {
  benchmark('date-fns', function () {
    return getISOYear(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.isoWeekYear()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
