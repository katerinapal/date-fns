import ext_moment from "moment";
import imp_getMilliseconds from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var getMilliseconds = imp_getMilliseconds
var moment = ext_moment

suite('getMilliseconds', function () {
  benchmark('date-fns', function () {
    return getMilliseconds(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.milliseconds()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
