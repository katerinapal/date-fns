import { differenceInCalendarQuarters as _differenceInCalendarQuarters } from "./";

suite('differenceInCalendarQuarters', function () {
  benchmark('date-fns', function () {
    return _differenceInCalendarQuarters(this.dateA, this.dateB);
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
  }
})
