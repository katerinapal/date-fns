import { setMinutes as _setMinutes } from "./";
import ext_moment_moment from "moment";

suite('setMinutes', function () {
  benchmark('date-fns', function () {
    return _setMinutes(this.date, 45);
  })

  benchmark('Moment.js', function () {
    return this.moment.minutes(45)
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
