import { max as _max } from "./";
import ext_moment_moment from "moment";

suite('max', function () {
  benchmark('date-fns', function () {
    return _max(this.dateA, this.dateB);
  })

  benchmark('Moment.js', function () {
    return ext_moment_moment.max(this.momentA, this.momentB);
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = ext_moment_moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})
