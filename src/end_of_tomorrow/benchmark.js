import { endOfTomorrow as _endOfTomorrow } from "./";

suite('endOfTomorrow', function () {
  benchmark('date-fns', function () {
    return _endOfTomorrow();
  })
})
