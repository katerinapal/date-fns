import ext_moment from "moment";
import imp_isEqual from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isEqual = imp_isEqual
var moment = ext_moment

suite('isEqual', function () {
  benchmark('date-fns', function () {
    return isEqual(this.dateA, this.dateB)
  })

  benchmark('Moment.js', function () {
    return this.momentA.isSame(this.momentB)
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})
