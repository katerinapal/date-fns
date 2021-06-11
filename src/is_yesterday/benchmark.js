import { isYesterday as _isYesterday } from "./";

suite('isYesterday', function () {
  benchmark('date-fns', function () {
    return _isYesterday(this.date);
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
