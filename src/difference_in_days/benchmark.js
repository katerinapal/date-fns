import ext_moment from "moment";
import imp_differenceInDays from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var differenceInDays = imp_differenceInDays
var moment = ext_moment

suite('differenceInDays', function () {
  benchmark('date-fns', function () {
    return differenceInDays(this.dateA, this.dateB)
  })

  benchmark('Moment.js', function () {
    return this.momentA.diff(this.momentB, 'day')
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})
