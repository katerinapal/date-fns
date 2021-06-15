import { getDaysInYear as _getDaysInYear } from "./";

suite('getDaysInYear', function () {
  benchmark('date-fns', function () {
    return _getDaysInYear(this.date);
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
