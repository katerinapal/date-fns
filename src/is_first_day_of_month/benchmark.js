import { isFirstDayOfMonth as _isFirstDayOfMonth } from "./";

suite('isFirstDayOfMonth', function () {
  benchmark('date-fns', function () {
    return _isFirstDayOfMonth(this.date);
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
