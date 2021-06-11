import { differenceInMilliseconds as _differenceInMilliseconds } from "./";
import ext_moment_moment from "moment";

suite('differenceInMilliseconds', function () {
  benchmark('date-fns', function () {
    return _differenceInMilliseconds(this.dateA, this.dateB);
  })

  benchmark('Moment.js', function () {
    return this.momentA.diff(this.momentB)
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = ext_moment_moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})
