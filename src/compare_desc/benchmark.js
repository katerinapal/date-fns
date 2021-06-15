import { compareDesc as _compareDesc } from "./";

suite('compareDesc', function () {
  benchmark('date-fns', function () {
    return _compareDesc(this.dateA, this.dateB);
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
  }
})
