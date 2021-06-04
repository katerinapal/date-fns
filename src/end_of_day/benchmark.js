import { endOfDay as _endOfDay } from "./";
import ext_moment_moment from "moment";

suite('endOfDay', function () {
  benchmark('date-fns', function () {
    return _endOfDay(this.date);
  })

  benchmark('Moment.js', function () {
    return this.moment.endOf('day')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
