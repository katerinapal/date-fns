import { addSeconds as _addSeconds } from "./";
import ext_moment_moment from "moment";

suite('addSeconds', function () {
  benchmark('date-fns', function () {
    return _addSeconds(this.date, 15);
  })

  benchmark('Moment.js', function () {
    return this.moment.add(15, 'seconds')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
