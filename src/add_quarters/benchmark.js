import { addQuarters as _addQuarters } from "./";
import ext_moment_moment from "moment";

suite('addQuarters', function () {
  benchmark('date-fns', function () {
    return _addQuarters(this.date, 2);
  })

  benchmark('Moment.js', function () {
    return this.moment.add(2, 'quarters')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
