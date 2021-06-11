import { setHours as _setHours } from "./";
import ext_moment_moment from "moment";

suite('setHours', function () {
  benchmark('date-fns', function () {
    return _setHours(this.date, 14);
  })

  benchmark('Moment.js', function () {
    return this.moment.hours(14)
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
