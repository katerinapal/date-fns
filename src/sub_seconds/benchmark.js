import ext_moment from "moment";
import imp_subSeconds from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var subSeconds = imp_subSeconds
var moment = ext_moment

suite('subSeconds', function () {
  benchmark('date-fns', function () {
    return subSeconds(this.date, 100)
  })

  benchmark('Moment.js', function () {
    return this.moment.subtract(100, 'seconds')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
