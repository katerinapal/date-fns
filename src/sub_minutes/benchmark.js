import ext_moment from "moment";
import imp_subMinutes from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var subMinutes = imp_subMinutes
var moment = ext_moment

suite('subMinutes', function () {
  benchmark('date-fns', function () {
    return subMinutes(this.date, 25)
  })

  benchmark('Moment.js', function () {
    return this.moment.subtract(25, 'minutes')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
