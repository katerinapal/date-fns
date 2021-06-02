import ext_moment from "moment";
import imp_getQuarter from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var getQuarter = imp_getQuarter
var moment = ext_moment

suite('getQuarter', function () {
  benchmark('date-fns', function () {
    return getQuarter(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.quarter()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
