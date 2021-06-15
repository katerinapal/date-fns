import { isMonday as _isMonday } from "./";

suite('isMonday', function () {
  benchmark('date-fns', function () {
    return _isMonday(this.date);
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
