import { addMilliseconds as _addMilliseconds } from "./";
import ext_moment_moment from "moment";

suite('addMilliseconds', function () {
  benchmark('date-fns', function () {
    return _addMilliseconds(this.date, 500);
  })

  benchmark('Moment.js', function () {
    return this.moment.add(500, 'milliseconds')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
