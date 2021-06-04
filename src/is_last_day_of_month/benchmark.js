import { isLastDayOfMonth as _isLastDayOfMonth } from "./";

suite('isLastDayOfMonth', function () {
  benchmark('date-fns', function () {
    return _isLastDayOfMonth(this.date);
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
