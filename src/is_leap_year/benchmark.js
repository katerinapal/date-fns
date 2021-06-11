import { isLeapYear as _isLeapYear } from "./";
import ext_moment_moment from "moment";

suite('isLeapYear', function () {
  benchmark('date-fns', function () {
    return _isLeapYear(this.date);
  })

  benchmark('Moment.js', function () {
    return this.moment.isLeapYear()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
