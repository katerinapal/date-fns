import { isFriday as _isFriday } from "./";

suite('isFriday', function () {
  benchmark('date-fns', function () {
    return _isFriday(this.date);
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
