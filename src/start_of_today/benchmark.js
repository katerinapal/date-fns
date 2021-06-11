import { startOfToday as _startOfToday } from "./";

suite('startOfToday', function () {
  benchmark('date-fns', function () {
    return _startOfToday();
  })
})
