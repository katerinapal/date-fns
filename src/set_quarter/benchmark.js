import { setQuarter as _setQuarter } from "./";
import ext_moment_moment from "moment";

suite('setQuarter', function () {
  benchmark('date-fns', function () {
    return _setQuarter(this.date, 3);
  })

  benchmark('Moment.js', function () {
    return this.moment.quarter(3)
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
