import { getHours as _getHours } from "./";
import ext_moment_moment from "moment";

suite('getHours', function () {
  benchmark('date-fns', function () {
    return _getHours(this.date);
  })

  benchmark('Moment.js', function () {
    return this.moment.hours()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
