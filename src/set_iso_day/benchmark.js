import { setISODay as _setISODay } from "./";
import ext_moment_moment from "moment";

suite('setISODay', function () {
  benchmark('date-fns', function () {
    return _setISODay(this.date, 5);
  })

  benchmark('Moment.js', function () {
    return this.moment.isoWeekday(5)
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
