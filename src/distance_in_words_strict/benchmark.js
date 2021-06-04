import { distanceInWordsStrict as _distanceInWordsStrict } from "./";
import ext_moment_moment from "moment";

suite('distanceInWordsStrict', function () {
  benchmark('date-fns', function () {
    return _distanceInWordsStrict(this.dateA, this.dateB);
  })

  benchmark('Moment.js', function () {
    return this.momentA.from(this.momentB)
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = ext_moment_moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})
