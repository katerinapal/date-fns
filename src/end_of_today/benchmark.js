import { endOfToday as _endOfToday } from "./";

suite('endOfToday', function () {
  benchmark('date-fns', function () {
    return _endOfToday();
  })
})
