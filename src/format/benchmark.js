import { format as _format } from "./";
import ext_moment_moment from "moment";

suite('format', function () {
  benchmark('date-fns', function () {
    return _format(this.date, 'dddd, MMMM Do YYYY, h:mm:ss a');
  })

  benchmark('Moment.js', function () {
    return this.moment.format('dddd, MMMM Do YYYY, h:mm:ss a')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = ext_moment_moment()
  }
})
