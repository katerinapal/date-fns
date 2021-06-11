import { addISOYears as _addISOYears } from "./";

suite('addISOYears', function () {
  benchmark('date-fns', function () {
    return _addISOYears(this.date, 7);
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
