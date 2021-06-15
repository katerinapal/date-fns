import { setSeconds as _setSeconds } from "./";
import ext_moment_moment from "moment";

suite('setSeconds', function () {
  benchmark('date-fns', function () {
    return _setSeconds(this.date, 15);
  })

  benchmark('Moment.js', function () {
    return this.moment.seconds(15)
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
