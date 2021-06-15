import { getMonth as _getMonth } from "./";
import ext_moment_moment from "moment";

suite('getMonth', function () {
  benchmark('date-fns', function () {
    return _getMonth(this.date);
  })

  benchmark('Moment.js', function () {
    return this.moment.month()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
