import { endOfQuarter as _endOfQuarter } from "./";
import ext_moment_moment from "moment";

suite('endOfQuarter', function () {
  benchmark('date-fns', function () {
    return _endOfQuarter(this.date);
  })

  benchmark('Moment.js', function () {
    return this.moment.endOf('quarter')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
