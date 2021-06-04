import { getISOYear as _getISOYear } from "./";
import ext_moment_moment from "moment";

suite('getISOYear', function () {
  benchmark('date-fns', function () {
    return _getISOYear(this.date);
  })

  benchmark('Moment.js', function () {
    return this.moment.isoWeekYear()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
