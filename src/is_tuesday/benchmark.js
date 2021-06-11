import { isTuesday as _isTuesday } from "./";

suite('isTuesday', function () {
  benchmark('date-fns', function () {
    return _isTuesday(this.date);
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
