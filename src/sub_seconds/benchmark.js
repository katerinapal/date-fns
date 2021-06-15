import { subSeconds as _subSeconds } from "./";
import ext_moment_moment from "moment";

suite('subSeconds', function () {
  benchmark('date-fns', function () {
    return _subSeconds(this.date, 100);
  })

  benchmark('Moment.js', function () {
    return this.moment.subtract(100, 'seconds')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
