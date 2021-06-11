import { compareAsc as _compareAsc } from "./";

suite('compareAsc', function () {
  benchmark('date-fns', function () {
    return _compareAsc(this.dateA, this.dateB);
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
  }
})
