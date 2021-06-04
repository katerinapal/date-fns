import { addHours as _addHours } from "./";
import ext_moment_moment from "moment";

suite('addHours', function () {
  benchmark('date-fns', function () {
    return _addHours(this.date, 3);
  })

  benchmark('Moment.js', function () {
    return this.moment.add(3, 'hours')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
