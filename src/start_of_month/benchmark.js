import { startOfMonth as _startOfMonth } from "./";
import ext_moment_moment from "moment";

suite('startOfMonth', function () {
  benchmark('date-fns', function () {
    return _startOfMonth(this.date);
  })

  benchmark('Moment.js', function () {
    return this.moment.startOf('month')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
