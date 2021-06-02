import ext_moment from "moment";
import imp_subMilliseconds from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var subMilliseconds = imp_subMilliseconds
var moment = ext_moment

suite('subMilliseconds', function () {
  benchmark('date-fns', function () {
    return subMilliseconds(this.date, 800)
  })

  benchmark('Moment.js', function () {
    return this.moment.subtract(800, 'milliseconds')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
