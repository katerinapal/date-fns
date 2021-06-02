import ext_moment from "moment";
import imp_getHours from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var getHours = imp_getHours
var moment = ext_moment

suite('getHours', function () {
  benchmark('date-fns', function () {
    return getHours(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.hours()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
