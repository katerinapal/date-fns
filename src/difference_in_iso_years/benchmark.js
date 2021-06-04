import { differenceInISOYears as _differenceInISOYears } from "./";

suite('differenceInISOYears', function () {
  benchmark('date-fns', function () {
    return _differenceInISOYears(this.dateA, this.dateB);
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
  }
})
