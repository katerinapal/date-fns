import ext_moment from "moment";
import imp_format from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var format = imp_format
var moment = ext_moment

suite('format', function () {
  benchmark('date-fns', function () {
    return format(this.date, 'dddd, MMMM Do YYYY, h:mm:ss a')
  })

  benchmark('Moment.js', function () {
    return this.moment.format('dddd, MMMM Do YYYY, h:mm:ss a')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
