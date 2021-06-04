import { isThisMonth as _isThisMonth } from "./";

suite('isThisMonth', function () {
  benchmark('date-fns', function () {
    return _isThisMonth(this.date);
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
