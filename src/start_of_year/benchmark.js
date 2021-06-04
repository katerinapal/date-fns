import { startOfYear as _startOfYear } from "./";
import ext_moment_moment from "moment";

suite('startOfYear', function () {
  benchmark('date-fns', function () {
    return _startOfYear(this.date);
  })

  benchmark('Moment.js', function () {
    return this.moment.startOf('year')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
