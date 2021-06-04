import { subDays as _subDays } from "./";
import ext_moment_moment from "moment";

suite('subDays', function () {
  benchmark('date-fns', function () {
    return _subDays(this.date, 14);
  })

  benchmark('Moment.js', function () {
    return this.moment.subtract(14, 'days')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
