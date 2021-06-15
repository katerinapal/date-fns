import { isThursday as _isThursday } from "./";

suite('isThursday', function () {
  benchmark('date-fns', function () {
    return _isThursday(this.date);
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
