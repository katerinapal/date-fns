import { isWednesday as _isWednesday } from "./";

suite('isWednesday', function () {
  benchmark('date-fns', function () {
    return _isWednesday(this.date);
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
