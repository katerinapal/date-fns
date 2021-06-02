import ext_moment from "moment";
import imp_subQuarters from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var subQuarters = imp_subQuarters
var moment = ext_moment

suite('subQuarters', function () {
  benchmark('date-fns', function () {
    return subQuarters(this.date, 1)
  })

  benchmark('Moment.js', function () {
    return this.moment.subtract(1, 'quarters')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
