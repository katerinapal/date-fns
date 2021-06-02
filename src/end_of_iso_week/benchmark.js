import ext_moment from "moment";
import imp_endOfISOWeek from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var endOfISOWeek = imp_endOfISOWeek
var moment = ext_moment

suite('endOfISOWeek', function () {
  benchmark('date-fns', function () {
    return endOfISOWeek(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.endOf('isoWeek')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
