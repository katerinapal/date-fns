import { startOfQuarter as _startOfQuarter } from "./";
import ext_moment_moment from "moment";

suite('startOfQuarter', function () {
  benchmark('date-fns', function () {
    return _startOfQuarter(this.date);
  })

  benchmark('Moment.js', function () {
    return this.moment.startOf('quarter')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
