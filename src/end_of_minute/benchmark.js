import { endOfMinute as _endOfMinute } from "./";
import ext_moment_moment from "moment";

suite('endOfMinute', function () {
  benchmark('date-fns', function () {
    return _endOfMinute(this.date);
  })

  benchmark('Moment.js', function () {
    return this.moment.endOf('minute')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
