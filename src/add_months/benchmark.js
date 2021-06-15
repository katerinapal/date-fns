import { addMonths as _addMonths } from "./";
import ext_moment_moment from "moment";

suite('addMonths', function () {
  benchmark('date-fns', function () {
    return _addMonths(this.date, 4);
  })

  benchmark('Moment.js', function () {
    return this.moment.add(4, 'months')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
