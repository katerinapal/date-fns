import { isToday as _isToday } from "./";

suite('isToday', function () {
  benchmark('date-fns', function () {
    return _isToday(this.date);
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
