import { startOfTomorrow as _startOfTomorrow } from "./";

suite('startOfTomorrow', function () {
  benchmark('date-fns', function () {
    return _startOfTomorrow();
  })
})
