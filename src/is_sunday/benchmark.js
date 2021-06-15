import { isSunday as _isSunday } from "./";

suite('isSunday', function () {
  benchmark('date-fns', function () {
    return _isSunday(this.date);
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
