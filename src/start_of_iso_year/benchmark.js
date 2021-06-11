import { startOfISOYear as _startOfISOYear } from "./";

suite('startOfISOYear', function () {
  benchmark('date-fns', function () {
    return _startOfISOYear(this.date);
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
