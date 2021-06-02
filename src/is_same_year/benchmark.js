import ext_moment from "moment";
import imp_isSameYear from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isSameYear = imp_isSameYear
var moment = ext_moment

suite('isSameYear', function () {
  benchmark('date-fns', function () {
    return isSameYear(this.dateA, this.dateB)
  })

  benchmark('Moment.js', function () {
    return this.momentA.isSame(this.momentB, 'year')
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})
