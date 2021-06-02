import ext_moment from "moment";
import imp_subDays from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var subDays = imp_subDays
var moment = ext_moment

suite('subDays', function () {
  benchmark('date-fns', function () {
    return subDays(this.date, 14)
  })

  benchmark('Moment.js', function () {
    return this.moment.subtract(14, 'days')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
