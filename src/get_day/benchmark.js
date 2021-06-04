import { getDay as _getDay } from "./";
import ext_moment_moment from "moment";

suite('getDay', function () {
  benchmark('date-fns', function () {
    return _getDay(this.date);
  })

  benchmark('Moment.js', function () {
    return this.moment.day()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
