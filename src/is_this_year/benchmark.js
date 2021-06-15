import { isThisYear as _isThisYear } from "./";

suite('isThisYear', function () {
  benchmark('date-fns', function () {
    return _isThisYear(this.date);
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
