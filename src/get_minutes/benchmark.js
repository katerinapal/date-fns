import ext_moment from "moment";
import imp_getMinutes from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var getMinutes = imp_getMinutes
var moment = ext_moment

suite('getMinutes', function () {
  benchmark('date-fns', function () {
    return getMinutes(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.minutes()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
