import { isThisSecond as _isThisSecond } from "./";

suite('isThisSecond', function () {
  benchmark('date-fns', function () {
    return _isThisSecond(this.date);
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
