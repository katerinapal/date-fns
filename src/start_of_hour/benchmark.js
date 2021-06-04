import { startOfHour as _startOfHour } from "./";
import ext_moment_moment from "moment";

suite('startOfHour', function () {
  benchmark('date-fns', function () {
    return _startOfHour(this.date);
  })

  benchmark('Moment.js', function () {
    return this.moment.startOf('hour')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
