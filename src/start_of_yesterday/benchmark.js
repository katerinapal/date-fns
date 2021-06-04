import { startOfYesterday as startOfToday } from "./";

suite('startOfYesterday', function () {
  benchmark('date-fns', function () {
    return startOfToday();
  })
})
