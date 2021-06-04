import { differenceInQuarters as _differenceInQuarters } from "./";
import ext_moment_moment from "moment";

suite('differenceInQuarters', function () {
  benchmark('date-fns', function () {
    return _differenceInQuarters(this.dateA, this.dateB);
  })

  benchmark('Moment.js', function () {
    return this.momentA.diff(this.momentB, 'quarter')
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = ext_moment_moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})
