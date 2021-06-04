import { isValid as _isValid } from "./";
import ext_moment_moment from "moment";

suite('isValid', function () {
  benchmark('date-fns', function () {
    return _isValid(this.invalidDate);
  })

  benchmark('Moment.js', function () {
    return this.invalidMoment.isValid()
  })
}, {
  setup: function () {
    this.invalidDate = new Date(NaN)
    this.invalidMoment = ext_moment_moment(new Date(NaN))
  }
})
