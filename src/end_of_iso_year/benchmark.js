import { endOfISOYear as _endOfISOYear } from "./";

suite('endOfISOYear', function () {
  benchmark('date-fns', function () {
    return _endOfISOYear(this.date);
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
