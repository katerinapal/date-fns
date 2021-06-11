import { subWeeks as _subWeeks } from "./";
import ext_moment_moment from "moment";

suite('subWeeks', function () {
  benchmark('date-fns', function () {
    return _subWeeks(this.date, 8);
  })

  benchmark('Moment.js', function () {
    return this.moment.subtract(8, 'weeks')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
