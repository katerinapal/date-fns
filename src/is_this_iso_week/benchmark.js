import { isThisISOWeek as _isThisISOWeek } from "./";

suite('isThisISOWeek', function () {
  benchmark('date-fns', function () {
    return _isThisISOWeek(this.date);
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
