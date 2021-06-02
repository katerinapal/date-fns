import ext_moment from "moment";
import imp_isSameHour from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isSameHour = imp_isSameHour
var moment = ext_moment

suite('isSameHour', function () {
  benchmark('date-fns', function () {
    return isSameHour(this.dateA, this.dateB)
  })

  benchmark('Moment.js', function () {
    return this.momentA.isSame(this.momentB, 'hour')
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})
