import ext_moment from "moment";
import imp_getSeconds from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var getSeconds = imp_getSeconds
var moment = ext_moment

suite('getSeconds', function () {
  benchmark('date-fns', function () {
    return getSeconds(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.seconds()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
