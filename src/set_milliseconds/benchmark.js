import { setMilliseconds as _setMilliseconds } from "./";
import ext_moment_moment from "moment";

suite('setMilliseconds', function () {
  benchmark('date-fns', function () {
    return _setMilliseconds(this.date, 400);
  })

  benchmark('Moment.js', function () {
    return this.moment.milliseconds(400)
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
