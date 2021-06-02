import ext_moment from "moment";
import imp_isValid from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isValid = imp_isValid
var moment = ext_moment

suite('isValid', function () {
  benchmark('date-fns', function () {
    return isValid(this.invalidDate)
  })

  benchmark('Moment.js', function () {
    return this.invalidMoment.isValid()
  })
}, {
  setup: function () {
    this.invalidDate = new Date(NaN)
    this.invalidMoment = moment(new Date(NaN))
  }
})
