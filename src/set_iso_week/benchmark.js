import { setISOWeek as _setISOWeek } from "./";
import ext_moment_moment from "moment";

suite('setISOWeek', function () {
  benchmark('date-fns', function () {
    return _setISOWeek(this.date, 10);
  })

  benchmark('Moment.js', function () {
    return this.moment.isoWeek(10)
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
