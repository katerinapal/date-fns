import { isSaturday as _isSaturday } from "./";

suite('isSaturday', function () {
  benchmark('date-fns', function () {
    return _isSaturday(this.date);
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
