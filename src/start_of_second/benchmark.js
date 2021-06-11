import { startOfSecond as _startOfSecond } from "./";
import ext_moment_moment from "moment";

suite('startOfSecond', function () {
  benchmark('date-fns', function () {
    return _startOfSecond(this.date);
  })

  benchmark('Moment.js', function () {
    return this.moment.startOf('second')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
