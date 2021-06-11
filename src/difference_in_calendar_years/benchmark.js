import { differenceInCalendarYears as _differenceInCalendarYears } from "./";

suite('differenceInCalendarYears', function () {
  benchmark('date-fns', function () {
    return _differenceInCalendarYears(this.dateA, this.dateB);
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
  }
})
