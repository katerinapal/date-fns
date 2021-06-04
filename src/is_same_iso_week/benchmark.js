import { isSameISOWeek as _isSameISOWeek } from "./";

suite('isSameISOWeek', function () {
  benchmark('date-fns', function () {
    return _isSameISOWeek(this.dateA, this.dateB);
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
  }
})
