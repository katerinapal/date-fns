import { subHours as _subHours } from "./";
import ext_moment_moment from "moment";

suite('subHours', function () {
  benchmark('date-fns', function () {
    return _subHours(this.date, 32);
  })

  benchmark('Moment.js', function () {
    return this.moment.subtract(32, 'hours')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
