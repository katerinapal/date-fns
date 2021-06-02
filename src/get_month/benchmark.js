import ext_moment from "moment";
import imp_getMonth from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var getMonth = imp_getMonth
var moment = ext_moment

suite('getMonth', function () {
  benchmark('date-fns', function () {
    return getMonth(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.month()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
