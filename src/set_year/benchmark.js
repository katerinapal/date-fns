import { setYear as _setYear } from "./";
import ext_moment_moment from "moment";

suite('setYear', function () {
  benchmark('date-fns', function () {
    return _setYear(this.date, 2014);
  })

  benchmark('Moment.js', function () {
    return this.moment.year(2014)
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
