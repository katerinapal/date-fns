import ext_moment from "moment";
import imp_isSameMinute from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isSameMinute = imp_isSameMinute
var moment = ext_moment

suite('isSameMinute', function () {
  benchmark('date-fns', function () {
    return isSameMinute(this.dateA, this.dateB)
  })

  benchmark('Moment.js', function () {
    return this.momentA.isSame(this.momentB, 'minute')
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})
