import { lastDayOfYear as _lastDayOfYear } from "./";

suite('lastDayOfYear', function () {
  benchmark('date-fns', function () {
    return _lastDayOfYear(this.date);
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
