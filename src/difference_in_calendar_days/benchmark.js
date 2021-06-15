import { differenceInCalendarDays as _differenceInCalendarDays } from "./";

suite('differenceInCalendarDays', function () {
  benchmark('date-fns', function () {
    return _differenceInCalendarDays(this.dateA, this.dateB);
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
  }
})
