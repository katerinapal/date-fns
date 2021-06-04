import { isPast as _isPast } from "./";

suite('isPast', function () {
  benchmark('date-fns', function () {
    return _isPast(this.date);
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
