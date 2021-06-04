import { startOfMinute as _startOfMinute } from "./";
import ext_moment_moment from "moment";

suite('startOfMinute', function () {
  benchmark('date-fns', function () {
    return _startOfMinute(this.date);
  })

  benchmark('Moment.js', function () {
    return this.moment.startOf('minute')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
