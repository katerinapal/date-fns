import { setDay as _setDay } from "./";
import ext_moment_moment from "moment";

suite('setDay', function () {
  benchmark('date-fns', function () {
    return _setDay(this.date, 3);
  })

  benchmark('Moment.js', function () {
    return this.moment.day(3)
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
