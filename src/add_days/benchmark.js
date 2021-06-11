import { addDays as _addDays } from "./";
import ext_moment_moment from "moment";

suite('addDays', function () {
  benchmark('date-fns', function () {
    return _addDays(this.date, 7);
  })

  benchmark('Moment.js', function () {
    return this.moment.add(7, 'days')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
