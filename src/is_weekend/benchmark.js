import { isWeekend as _isWeekend } from "./";

suite('isWeekend', function () {
  benchmark('date-fns', function () {
    return _isWeekend(this.date);
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
