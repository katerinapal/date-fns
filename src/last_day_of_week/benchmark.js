import { lastDayOfWeek as _lastDayOfWeek } from "./";

suite('lastDayOfWeek', function () {
  benchmark('date-fns', function () {
    return _lastDayOfWeek(this.date);
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
