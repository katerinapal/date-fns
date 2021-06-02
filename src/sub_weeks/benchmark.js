import ext_moment from "moment";
import imp_subWeeks from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var subWeeks = imp_subWeeks
var moment = ext_moment

suite('subWeeks', function () {
  benchmark('date-fns', function () {
    return subWeeks(this.date, 8)
  })

  benchmark('Moment.js', function () {
    return this.moment.subtract(8, 'weeks')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
