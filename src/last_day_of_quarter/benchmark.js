import { lastDayOfQuarter as _lastDayOfQuarter } from "./";

suite('lastDayOfQuarter', function () {
  benchmark('date-fns', function () {
    return _lastDayOfQuarter(this.date);
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
