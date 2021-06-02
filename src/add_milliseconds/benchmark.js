import ext_moment from "moment";
import imp_addMilliseconds from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var addMilliseconds = imp_addMilliseconds
var moment = ext_moment

suite('addMilliseconds', function () {
  benchmark('date-fns', function () {
    return addMilliseconds(this.date, 500)
  })

  benchmark('Moment.js', function () {
    return this.moment.add(500, 'milliseconds')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
