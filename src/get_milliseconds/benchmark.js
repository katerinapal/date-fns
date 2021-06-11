import { getMilliseconds as _getMilliseconds } from "./";
import ext_moment_moment from "moment";

suite('getMilliseconds', function () {
  benchmark('date-fns', function () {
    return _getMilliseconds(this.date);
  })

  benchmark('Moment.js', function () {
    return this.moment.milliseconds()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
