import { getSeconds as _getSeconds } from "./";
import ext_moment_moment from "moment";

suite('getSeconds', function () {
  benchmark('date-fns', function () {
    return _getSeconds(this.date);
  })

  benchmark('Moment.js', function () {
    return this.moment.seconds()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
