import { addMinutes as _addMinutes } from "./";
import ext_moment_moment from "moment";

suite('addMinutes', function () {
  benchmark('date-fns', function () {
    return _addMinutes(this.date, 30);
  })

  benchmark('Moment.js', function () {
    return this.moment.add(30, 'minutes')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
