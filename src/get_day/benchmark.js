import ext_moment from "moment";
import imp_getDay from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var getDay = imp_getDay
var moment = ext_moment

suite('getDay', function () {
  benchmark('date-fns', function () {
    return getDay(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.day()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
