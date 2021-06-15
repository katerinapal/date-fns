import { getDayOfYear as _getDayOfYear } from "./";
import ext_moment_moment from "moment";

suite('getDayOfYear', function () {
  benchmark('date-fns', function () {
    return _getDayOfYear(this.date);
  })

  benchmark('Moment.js', function () {
    return this.moment.dayOfYear()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
