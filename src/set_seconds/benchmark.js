import ext_moment from "moment";
import imp_setSeconds from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var setSeconds = imp_setSeconds
var moment = ext_moment

suite('setSeconds', function () {
  benchmark('date-fns', function () {
    return setSeconds(this.date, 15)
  })

  benchmark('Moment.js', function () {
    return this.moment.seconds(15)
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
