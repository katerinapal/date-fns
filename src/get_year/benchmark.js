import { getYear as _getYear } from "./";
import ext_moment_moment from "moment";

suite('getYear', function () {
  benchmark('date-fns', function () {
    return _getYear(this.date);
  })

  benchmark('Moment.js', function () {
    return this.moment.year()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
