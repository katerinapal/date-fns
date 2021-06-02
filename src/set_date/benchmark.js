import ext_moment from "moment";
import imp_setDate from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var setDate = imp_setDate
var moment = ext_moment

suite('setDate', function () {
  benchmark('date-fns', function () {
    return setDate(this.date, 15)
  })

  benchmark('Moment.js', function () {
    return this.moment.date(15)
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
