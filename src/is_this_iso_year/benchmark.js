import { isThisISOYear as _isThisISOYear } from "./";

suite('isThisISOYear', function () {
  benchmark('date-fns', function () {
    return _isThisISOYear(this.date);
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
