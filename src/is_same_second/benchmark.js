import { isSameSecond as _isSameSecond } from "./";
import ext_moment_moment from "moment";

suite('isSameSecond', function () {
  benchmark('date-fns', function () {
    return _isSameSecond(this.dateA, this.dateB);
  })

  benchmark('Moment.js', function () {
    return this.momentA.isSame(this.momentB, 'second')
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = ext_moment_moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})
