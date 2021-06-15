import { isAfter as _isAfter } from "./";
import ext_moment_moment from "moment";

suite('isAfter', function () {
  benchmark('date-fns', function () {
    return _isAfter(this.dateA, this.dateB);
  })

  benchmark('Moment.js', function () {
    return this.momentA.isAfter(this.momentB)
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = ext_moment_moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})
