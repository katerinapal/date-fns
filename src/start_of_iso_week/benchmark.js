import { startOfISOWeek as _startOfISOWeek } from "./";
import ext_moment_moment from "moment";

suite('startOfISOWeek', function () {
  benchmark('date-fns', function () {
    return _startOfISOWeek(this.date);
  })

  benchmark('Moment.js', function () {
    return this.moment.startOf('isoWeek')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
