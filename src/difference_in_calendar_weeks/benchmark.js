import { differenceInCalendarWeeks as _differenceInCalendarWeeks } from "./";

suite('differenceInCalendarWeeks', function () {
  benchmark('date-fns', function () {
    return _differenceInCalendarWeeks(this.dateA, this.dateB);
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
  }
})
