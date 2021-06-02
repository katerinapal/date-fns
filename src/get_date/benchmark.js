import ext_moment from "moment";
import imp_getDate from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var getDate = imp_getDate
var moment = ext_moment

suite('getDate', function () {
  benchmark('date-fns', function () {
    return getDate(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.date()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
