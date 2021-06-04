import { isSoLastWeek as _isSoLastWeek } from "./";

suite('isSoLastWeek', function () {
  benchmark('date-fns', function () {
    return _isSoLastWeek(this.date);
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
