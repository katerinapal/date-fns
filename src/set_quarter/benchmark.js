import ext_moment from "moment";
import imp_setQuarter from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var setQuarter = imp_setQuarter
var moment = ext_moment

suite('setQuarter', function () {
  benchmark('date-fns', function () {
    return setQuarter(this.date, 3)
  })

  benchmark('Moment.js', function () {
    return this.moment.quarter(3)
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
