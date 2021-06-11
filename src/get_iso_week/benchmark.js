import { getISOWeek as _getISOWeek } from "./";
import ext_moment_moment from "moment";

suite('getISOWeek', function () {
  benchmark('date-fns', function () {
    return _getISOWeek(this.date);
  })

  benchmark('Moment.js', function () {
    return this.moment.isoWeek()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
