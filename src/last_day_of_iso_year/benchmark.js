import { lastDayOfISOYear as _lastDayOfISOYear } from "./";

suite('lastDayOfISOYear', function () {
  benchmark('date-fns', function () {
    return _lastDayOfISOYear(this.date);
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
