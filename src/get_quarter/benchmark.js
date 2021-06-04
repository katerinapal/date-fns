import { getQuarter as _getQuarter } from "./";
import ext_moment_moment from "moment";

suite('getQuarter', function () {
  benchmark('date-fns', function () {
    return _getQuarter(this.date);
  })

  benchmark('Moment.js', function () {
    return this.moment.quarter()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
