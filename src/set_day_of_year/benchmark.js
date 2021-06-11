import { setDayOfYear as _setDayOfYear } from "./";
import ext_moment_moment from "moment";

suite('setDayOfYear', function () {
  benchmark('date-fns', function () {
    return _setDayOfYear(this.date, 150);
  })

  benchmark('Moment.js', function () {
    return this.moment.dayOfYear(150)
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
