import { isTomorrow as _isTomorrow } from "./";

suite('isTomorrow', function () {
  benchmark('date-fns', function () {
    return _isTomorrow(this.date);
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
