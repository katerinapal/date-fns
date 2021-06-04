import { isSameMonth as _isSameMonth } from "./";
import ext_moment_moment from "moment";

suite('isSameMonth', function () {
  benchmark('date-fns', function () {
    return _isSameMonth(this.dateA, this.dateB);
  })

  benchmark('Moment.js', function () {
    return this.momentA.isSame(this.momentB, 'month')
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = ext_moment_moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})
