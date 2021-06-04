import { endOfSecond as _endOfSecond } from "./";
import ext_moment_moment from "moment";

suite('endOfSecond', function () {
  benchmark('date-fns', function () {
    return _endOfSecond(this.date);
  })

  benchmark('Moment.js', function () {
    return this.moment.endOf('second')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
