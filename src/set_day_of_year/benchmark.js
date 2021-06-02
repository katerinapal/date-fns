import ext_moment from "moment";
import imp_setDayOfYear from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var setDayOfYear = imp_setDayOfYear
var moment = ext_moment

suite('setDayOfYear', function () {
  benchmark('date-fns', function () {
    return setDayOfYear(this.date, 150)
  })

  benchmark('Moment.js', function () {
    return this.moment.dayOfYear(150)
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
