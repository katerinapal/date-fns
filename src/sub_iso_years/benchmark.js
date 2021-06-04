import { subISOYears as _subISOYears } from "./";

suite('subISOYears', function () {
  benchmark('date-fns', function () {
    return _subISOYears(this.date, 7);
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
