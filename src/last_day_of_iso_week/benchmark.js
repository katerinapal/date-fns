import { lastDayOfISOWeek as _lastDayOfISOWeek } from "./";

suite('lastDayOfISOWeek', function () {
  benchmark('date-fns', function () {
    return _lastDayOfISOWeek(this.date);
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
