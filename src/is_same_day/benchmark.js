import ext_moment from "moment";
import imp_isSameDay from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isSameDay = imp_isSameDay
var moment = ext_moment

suite('isSameDay', function () {
  benchmark('date-fns', function () {
    return isSameDay(this.dateA, this.dateB)
  })

  benchmark('Moment.js', function () {
    return this.momentA.isSame(this.momentB, 'day')
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})
