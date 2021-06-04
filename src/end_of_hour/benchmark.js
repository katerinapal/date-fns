import { endOfHour as _endOfHour } from "./";
import ext_moment_moment from "moment";

suite('endOfHour', function () {
  benchmark('date-fns', function () {
    return _endOfHour(this.date);
  })

  benchmark('Moment.js', function () {
    return this.moment.endOf('hour')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
