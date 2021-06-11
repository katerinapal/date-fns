import { isSameISOYear as _isSameISOYear } from "./";

suite('isSameISOYear', function () {
  benchmark('date-fns', function () {
    return _isSameISOYear(this.dateA, this.dateB);
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
  }
})
