import { endOfYear as _endOfYear } from "./";
import ext_moment_moment from "moment";

suite('endOfYear', function () {
  benchmark('date-fns', function () {
    return _endOfYear(this.date);
  })

  benchmark('Moment.js', function () {
    return this.moment.endOf('year')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
