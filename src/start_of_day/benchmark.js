import { startOfDay as _startOfDay } from "./";
import ext_moment_moment from "moment";

suite('startOfDay', function () {
  benchmark('date-fns', function () {
    return _startOfDay(this.date);
  })

  benchmark('Moment.js', function () {
    return this.moment.startOf('day')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
