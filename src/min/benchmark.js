import ext_moment from "moment";
import imp_min from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var min = imp_min
var moment = ext_moment

suite('min', function () {
  benchmark('date-fns', function () {
    return min(this.dateA, this.dateB)
  })

  benchmark('Moment.js', function () {
    return moment.min(this.momentA, this.momentB)
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})
