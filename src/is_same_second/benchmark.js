import ext_moment from "moment";
import imp_isSameSecond from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isSameSecond = imp_isSameSecond
var moment = ext_moment

suite('isSameSecond', function () {
  benchmark('date-fns', function () {
    return isSameSecond(this.dateA, this.dateB)
  })

  benchmark('Moment.js', function () {
    return this.momentA.isSame(this.momentB, 'second')
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})
