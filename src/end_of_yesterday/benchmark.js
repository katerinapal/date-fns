import { endOfYesterday as _endOfYesterday } from "./";

suite('endOfYesterday', function () {
  benchmark('date-fns', function () {
    return _endOfYesterday();
  })
})
