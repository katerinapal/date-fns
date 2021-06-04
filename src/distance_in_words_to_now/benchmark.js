import { distanceInWordsToNow as _distanceInWordsToNow } from "./";
import ext_moment_moment from "moment";

suite('distanceInWordsToNow', function () {
  benchmark('date-fns', function () {
    return _distanceInWordsToNow(this.date);
  })

  benchmark('Moment.js', function () {
    return this.moment.toNow()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
