import ext_moment from "moment";
import imp_addDays from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var addDays = imp_addDays
var moment = ext_moment

suite('addDays', function () {
  benchmark('date-fns', function () {
    return addDays(this.date, 7)
  })

  benchmark('Moment.js', function () {
    return this.moment.add(7, 'days')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
