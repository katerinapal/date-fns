import { getMinutes as _getMinutes } from "./";
import ext_moment_moment from "moment";

suite('getMinutes', function () {
  benchmark('date-fns', function () {
    return _getMinutes(this.date);
  })

  benchmark('Moment.js', function () {
    return this.moment.minutes()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
