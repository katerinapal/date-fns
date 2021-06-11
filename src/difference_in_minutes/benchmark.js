import { differenceInMinutes as _differenceInMinutes } from "./";
import ext_moment_moment from "moment";

suite('differenceInMinutes', function () {
  benchmark('date-fns', function () {
    return _differenceInMinutes(this.dateA, this.dateB);
  })

  benchmark('Moment.js', function () {
    return this.momentA.diff(this.momentB, 'minute')
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = ext_moment_moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})
