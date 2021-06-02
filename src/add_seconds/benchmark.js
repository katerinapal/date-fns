import ext_moment from "moment";
import imp_addSeconds from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var addSeconds = imp_addSeconds
var moment = ext_moment

suite('addSeconds', function () {
  benchmark('date-fns', function () {
    return addSeconds(this.date, 15)
  })

  benchmark('Moment.js', function () {
    return this.moment.add(15, 'seconds')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
