import { isThisHour as _isThisHour } from "./";

suite('isThisHour', function () {
  benchmark('date-fns', function () {
    return _isThisHour(this.date);
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
