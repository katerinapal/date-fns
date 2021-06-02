import ext_moment from "moment";
import imp_addWeeks from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var addWeeks = imp_addWeeks
var moment = ext_moment

suite('addWeeks', function () {
  benchmark('date-fns', function () {
    return addWeeks(this.date, 2)
  })

  benchmark('Moment.js', function () {
    return this.moment.add(2, 'weeks')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
