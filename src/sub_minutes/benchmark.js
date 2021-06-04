import { subMinutes as _subMinutes } from "./";
import ext_moment_moment from "moment";

suite('subMinutes', function () {
  benchmark('date-fns', function () {
    return _subMinutes(this.date, 25);
  })

  benchmark('Moment.js', function () {
    return this.moment.subtract(25, 'minutes')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
