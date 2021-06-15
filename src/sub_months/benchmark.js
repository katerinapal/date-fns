import { subMonths as _subMonths } from "./";
import ext_moment_moment from "moment";

suite('subMonths', function () {
  benchmark('date-fns', function () {
    return _subMonths(this.date, 7);
  })

  benchmark('Moment.js', function () {
    return this.moment.subtract(7, 'months')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
