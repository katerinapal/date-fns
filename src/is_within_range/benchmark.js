import { isWithinRange as _isWithinRange } from "./";
import ext_moment_moment from "moment";

suite('isWithinRange', function () {
  benchmark('date-fns', function () {
    return _isWithinRange(this.dateA, this.dateB, this.dateC);
  })

  benchmark('Moment.js', function () {
    return this.momentA.isBetween(this.momentB, this.momentC)
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = ext_moment_moment()
    this.dateB = new Date(this.dateA.getTime() - 604800000)
    this.momentB = this.momentA.clone().subtract(7, 'days')
    this.dateC = new Date(this.dateA.getTime() + 604800000)
    this.momentC = this.momentA.clone().add(7, 'days')
  }
})
