import { lastDayOfMonth as _lastDayOfMonth } from "./";

suite('lastDayOfMonth', function () {
  benchmark('date-fns', function () {
    return _lastDayOfMonth(this.date);
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
