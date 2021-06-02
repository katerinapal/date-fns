import ext_moment from "moment";
import imp_addHours from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var addHours = imp_addHours
var moment = ext_moment

suite('addHours', function () {
  benchmark('date-fns', function () {
    return addHours(this.date, 3)
  })

  benchmark('Moment.js', function () {
    return this.moment.add(3, 'hours')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
