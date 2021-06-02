import ext_moment from "moment";
import imp_setHours from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var setHours = imp_setHours
var moment = ext_moment

suite('setHours', function () {
  benchmark('date-fns', function () {
    return setHours(this.date, 14)
  })

  benchmark('Moment.js', function () {
    return this.moment.hours(14)
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
