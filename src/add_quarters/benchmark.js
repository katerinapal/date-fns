import ext_moment from "moment";
import imp_addQuarters from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var addQuarters = imp_addQuarters
var moment = ext_moment

suite('addQuarters', function () {
  benchmark('date-fns', function () {
    return addQuarters(this.date, 2)
  })

  benchmark('Moment.js', function () {
    return this.moment.add(2, 'quarters')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
