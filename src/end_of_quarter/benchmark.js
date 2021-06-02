import ext_moment from "moment";
import imp_endOfQuarter from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var endOfQuarter = imp_endOfQuarter
var moment = ext_moment

suite('endOfQuarter', function () {
  benchmark('date-fns', function () {
    return endOfQuarter(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.endOf('quarter')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
