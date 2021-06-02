import ext_moment from "moment";
import imp_distanceInWordsToNow from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var distanceInWordsToNow = imp_distanceInWordsToNow
var moment = ext_moment

suite('distanceInWordsToNow', function () {
  benchmark('date-fns', function () {
    return distanceInWordsToNow(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.toNow()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
