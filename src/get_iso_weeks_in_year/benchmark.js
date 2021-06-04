import { getISOWeeksInYear as _getISOWeeksInYear } from "./";
import ext_moment_moment from "moment";

suite('getISOWeeksInYear', function () {
  benchmark('date-fns', function () {
    return _getISOWeeksInYear(this.date);
  })

  benchmark('Moment.js', function () {
    return this.moment.isoWeeksInYear()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
