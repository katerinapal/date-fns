import ext_moment from "moment";
import imp_getTime from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var getTime = imp_getTime
var moment = ext_moment

suite('getTime', function () {
  benchmark('date-fns', function () {
    return getTime(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.valueOf()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
