import { isThisQuarter as _isThisQuarter } from "./";

suite('isThisQuarter', function () {
  benchmark('date-fns', function () {
    return _isThisQuarter(this.date);
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
