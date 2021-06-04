import { isThisWeek as _isThisWeek } from "./";

suite('isThisWeek', function () {
  benchmark('date-fns', function () {
    return _isThisWeek(this.date);
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
