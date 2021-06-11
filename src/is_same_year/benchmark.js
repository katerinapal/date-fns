import { isSameYear as _isSameYear } from "./";
import ext_moment_moment from "moment";

suite('isSameYear', function () {
  benchmark('date-fns', function () {
    return _isSameYear(this.dateA, this.dateB);
  })

  benchmark('Moment.js', function () {
    return this.momentA.isSame(this.momentB, 'year')
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = ext_moment_moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})
