import { getDaysInMonth as _getDaysInMonth } from "./";
import ext_moment_moment from "moment";

suite('getDaysInMonth', function () {
  benchmark('date-fns', function () {
    return _getDaysInMonth(this.date);
  })

  benchmark('Moment.js', function () {
    return this.moment.daysInMonth()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
