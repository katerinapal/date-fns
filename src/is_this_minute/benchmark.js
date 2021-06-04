import { isThisMinute as _isThisMinute } from "./";

suite('isThisMinute', function () {
  benchmark('date-fns', function () {
    return _isThisMinute(this.date);
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
