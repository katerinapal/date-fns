import ext_moment from "moment";
import imp_subHours from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var subHours = imp_subHours
var moment = ext_moment

suite('subHours', function () {
  benchmark('date-fns', function () {
    return subHours(this.date, 32)
  })

  benchmark('Moment.js', function () {
    return this.moment.subtract(32, 'hours')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
