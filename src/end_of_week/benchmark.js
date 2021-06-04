import { endOfWeek as _endOfWeek } from "./";
import ext_moment_moment from "moment";

suite('endOfWeek', function () {
  benchmark('date-fns', function () {
    return _endOfWeek(this.date);
  })

  benchmark('Moment.js', function () {
    return this.moment.endOf('week')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
