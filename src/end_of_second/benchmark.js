import ext_moment from "moment";
import imp_endOfSecond from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var endOfSecond = imp_endOfSecond
var moment = ext_moment

suite('endOfSecond', function () {
  benchmark('date-fns', function () {
    return endOfSecond(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.endOf('second')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
