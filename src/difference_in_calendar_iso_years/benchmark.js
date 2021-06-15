import { differenceInCalendarISOYears as _differenceInCalendarISOYears } from "./";

suite('differenceInCalendarISOYears', function () {
  benchmark('date-fns', function () {
    return _differenceInCalendarISOYears(this.dateA, this.dateB);
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
  }
})
