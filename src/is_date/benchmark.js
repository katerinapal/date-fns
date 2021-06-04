import { isDate as _isDate } from "./";
import ext_moment_moment from "moment";

suite('isDate', function () {
  benchmark('date-fns', function () {
    return _isDate(this.string);
  })

  benchmark('Moment.js', function () {
    return ext_moment_moment.isDate(this.string);
  })
}, {
  setup: function () {
    this.string = '123'
  }
})
