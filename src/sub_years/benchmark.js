import { subYears as _subYears } from "./";
import ext_moment_moment from "moment";

suite('subYears', function () {
  benchmark('date-fns', function () {
    return _subYears(this.date, 5);
  })

  benchmark('Moment.js', function () {
    return this.moment.subtract(5, 'years')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
