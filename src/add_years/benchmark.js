import ext_moment from "moment";
import imp_addYears from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var addYears = imp_addYears
var moment = ext_moment

suite('addYears', function () {
  benchmark('date-fns', function () {
    return addYears(this.date, 20)
  })

  benchmark('Moment.js', function () {
    return this.moment.add(20, 'years')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
