import { getISODay as _getISODay } from "./";
import ext_moment_moment from "moment";

suite('getISODay', function () {
  benchmark('date-fns', function () {
    return _getISODay(this.date);
  })

  benchmark('Moment.js', function () {
    return this.moment.isoWeekday()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
