import { min as _min } from "./";
import ext_moment_moment from "moment";

suite('min', function () {
  benchmark('date-fns', function () {
    return _min(this.dateA, this.dateB);
  })

  benchmark('Moment.js', function () {
    return ext_moment_moment.min(this.momentA, this.momentB);
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = ext_moment_moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})
