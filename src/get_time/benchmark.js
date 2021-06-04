import { getTime as _getTime } from "./";
import ext_moment_moment from "moment";

suite('getTime', function () {
  benchmark('date-fns', function () {
    return _getTime(this.date);
  })

  benchmark('Moment.js', function () {
    return this.moment.valueOf()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
