import ext_moment from "moment";
import imp_isSameQuarter from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isSameQuarter = imp_isSameQuarter
var moment = ext_moment

suite('isSameQuarter', function () {
  benchmark('date-fns', function () {
    return isSameQuarter(this.dateA, this.dateB)
  })

  benchmark('Moment.js', function () {
    return this.momentA.isSame(this.momentB, 'quarter')
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})
