import { setISOYear as _setISOYear } from "./";
import ext_moment_moment from "moment";

suite('setISOYear', function () {
  benchmark('date-fns', function () {
    return _setISOYear(this.date, 2008);
  })

  benchmark('Moment.js', function () {
    return this.moment.isoWeekYear(2008)
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
