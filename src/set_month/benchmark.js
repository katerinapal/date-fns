import { setMonth as _setMonth } from "./";
import ext_moment_moment from "moment";

suite('setMonth', function () {
  benchmark('date-fns', function () {
    return _setMonth(this.date, 6);
  })

  benchmark('Moment.js', function () {
    return this.moment.month(6)
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
