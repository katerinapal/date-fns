import { startOfWeek as _startOfWeek } from "./";
import ext_moment_moment from "moment";

suite('startOfWeek', function () {
  benchmark('date-fns', function () {
    return _startOfWeek(this.date);
  })

  benchmark('Moment.js', function () {
    return this.moment.startOf('week')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
