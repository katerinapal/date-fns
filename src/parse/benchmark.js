import { parse as _parse } from "./";
import ext_moment_moment from "moment";

suite('parse', function () {
  benchmark('date-fns', function () {
    return _parse('2014-10-25T13:46:20+07:00');
  })

  benchmark('Moment.js', function () {
    return ext_moment_moment('2014-10-25T13:46:20+07:00');
  })
})
