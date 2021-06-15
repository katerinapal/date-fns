import { getDate as _getDate } from "./";
import ext_moment_moment from "moment";

suite('getDate', function () {
  benchmark('date-fns', function () {
    return _getDate(this.date);
  })

  benchmark('Moment.js', function () {
    return this.moment.date()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
