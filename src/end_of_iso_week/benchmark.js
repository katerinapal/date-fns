import { endOfISOWeek as _endOfISOWeek } from "./";
import ext_moment_moment from "moment";

suite('endOfISOWeek', function () {
  benchmark('date-fns', function () {
    return _endOfISOWeek(this.date);
  })

  benchmark('Moment.js', function () {
    return this.moment.endOf('isoWeek')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
