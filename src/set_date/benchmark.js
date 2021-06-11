import { setDate as _setDate } from "./";
import ext_moment_moment from "moment";

suite('setDate', function () {
  benchmark('date-fns', function () {
    return _setDate(this.date, 15);
  })

  benchmark('Moment.js', function () {
    return this.moment.date(15)
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
