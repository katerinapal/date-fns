import { subQuarters as _subQuarters } from "./";
import ext_moment_moment from "moment";

suite('subQuarters', function () {
  benchmark('date-fns', function () {
    return _subQuarters(this.date, 1);
  })

  benchmark('Moment.js', function () {
    return this.moment.subtract(1, 'quarters')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
