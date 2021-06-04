import { isFuture as _isFuture } from "./";

suite('isFuture', function () {
  benchmark('date-fns', function () {
    return _isFuture(this.date);
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
