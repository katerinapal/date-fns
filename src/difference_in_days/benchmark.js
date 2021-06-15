import { differenceInDays as _differenceInDays } from "./";
import ext_moment_moment from "moment";

suite('differenceInDays', function () {
  benchmark('date-fns', function () {
    return _differenceInDays(this.dateA, this.dateB);
  })

  benchmark('Moment.js', function () {
    return this.momentA.diff(this.momentB, 'day')
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = ext_moment_moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})
