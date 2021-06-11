import { subMilliseconds as _subMilliseconds } from "./";
import ext_moment_moment from "moment";

suite('subMilliseconds', function () {
  benchmark('date-fns', function () {
    return _subMilliseconds(this.date, 800);
  })

  benchmark('Moment.js', function () {
    return this.moment.subtract(800, 'milliseconds')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
