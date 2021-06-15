import { differenceInCalendarMonths as _differenceInCalendarMonths } from "./";

suite('differenceInCalendarMonths', function () {
  benchmark('date-fns', function () {
    return _differenceInCalendarMonths(this.dateA, this.dateB);
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
  }
})
