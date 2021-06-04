import ext_assert from "power-assert";
import { areRangesOverlapping as _areRangesOverlapping } from "./";

describe('areRangesOverlapping', function () {
  var initialRangeStart = new Date(2016, 10, 10, 13, 0, 0)
  var initialRangeEnd = new Date(2016, 11, 3, 15, 0, 0)

  context('when the date ranges don\'t overlap', function () {
    it('returns false for a valid non overlapping range before another range', function () {
      var earlierRangeStart = new Date(2016, 9, 25)
      var earlierRangeEnd = new Date(2016, 10, 9)

      var isOverlapping = _areRangesOverlapping(initialRangeStart, initialRangeEnd, earlierRangeStart, earlierRangeEnd)
      ext_assert(isOverlapping === false)
    })

    it('returns false for a valid non overlapping range after another range', function () {
      var laterRangeStart = new Date(2016, 11, 4)
      var laterRangeEnd = new Date(2016, 11, 9)

      var isOverlapping = _areRangesOverlapping(initialRangeStart, initialRangeEnd, laterRangeStart, laterRangeEnd)
      ext_assert(isOverlapping === false)
    })

    it('returns false for a non overlapping same-day range', function () {
      var sameDayRangeStart = new Date(2016, 11, 4, 9, 0, 0)
      var sameDayRangeEnd = new Date(2016, 11, 4, 18, 0, 0)

      var isOverlapping = _areRangesOverlapping(initialRangeStart, initialRangeEnd, sameDayRangeStart, sameDayRangeEnd)
      ext_assert(isOverlapping === false)
    })

    it('returns false for a range differing by a few hours', function () {
      var oneDayOverlappingRangeStart = new Date(2016, 11, 3, 18, 0, 0)
      var oneDayOverlappingRangeEnd = new Date(2016, 11, 14, 13, 0, 0)

      var isOverlapping = _areRangesOverlapping(initialRangeStart, initialRangeEnd, oneDayOverlappingRangeStart, oneDayOverlappingRangeEnd)
      ext_assert(isOverlapping === false)
    })

    it('returns false for a range with the same startDateTime as the initial date ranges\'s endDateTime', function () {
      var oneDayOverlapRangeStart = new Date(2016, 11, 3, 15, 0, 0)
      var oneDayOverlapRangeEnd = new Date(2016, 11, 14, 13, 0, 0)

      var isOverlapping = _areRangesOverlapping(initialRangeStart, initialRangeEnd, oneDayOverlapRangeStart, oneDayOverlapRangeEnd)
      ext_assert(isOverlapping === false)
    })

    it('returns false for a range with the same endDateTime as the initial date range\'s startDateTime', function () {
      var oneDayOverlapRangeStart = new Date(2016, 10, 3, 15, 0, 0)
      var oneDayOverlapRangeEnd = new Date(2016, 10, 10, 13, 0, 0)

      var isOverlapping = _areRangesOverlapping(initialRangeStart, initialRangeEnd, oneDayOverlapRangeStart, oneDayOverlapRangeEnd)
      ext_assert(isOverlapping === false)
    })
  })

  context('when the date ranges overlap', function () {
    it('returns true for a range included within another range', function () {
      var includedRangeStart = new Date(2016, 10, 14)
      var includedRangeEnd = new Date(2016, 10, 14)

      var isOverlapping = _areRangesOverlapping(initialRangeStart, initialRangeEnd, includedRangeStart, includedRangeEnd)
      ext_assert(isOverlapping === true)
    })

    it('returns true for a range overlapping at the end', function () {
      var endOverlappingRangeStart = new Date(2016, 10, 5)
      var endOverlappingRangeEnd = new Date(2016, 10, 14)

      var isOverlapping = _areRangesOverlapping(initialRangeStart, initialRangeEnd, endOverlappingRangeStart, endOverlappingRangeEnd)
      ext_assert(isOverlapping === true)
    })

    it('returns true for a range overlapping at the beginning', function () {
      var startOverlappingRangeStart = new Date(2016, 10, 20)
      var startOverlappingRangeEnd = new Date(2016, 11, 14)

      var isOverlapping = _areRangesOverlapping(initialRangeStart, initialRangeEnd, startOverlappingRangeStart, startOverlappingRangeEnd)
      ext_assert(isOverlapping === true)
    })

    it('returns true for a range including another range', function () {
      var includingRangeStart = new Date(2016, 10, 5)
      var includingRangeEnd = new Date(2016, 11, 15)

      var isOverlapping = _areRangesOverlapping(initialRangeStart, initialRangeEnd, includingRangeStart, includingRangeEnd)
      ext_assert(isOverlapping === true)
    })
  })

  it('accepts strings', function () {
    var initialRangeStart = new Date(2016, 10, 10, 13, 0, 0).toISOString()
    var initialRangeEnd = new Date(2016, 11, 3, 15, 0, 0).toISOString()

    var endOverlappingRangeStart = new Date(2016, 10, 5).toISOString()
    var endOverlappingRangeEnd = new Date(2016, 10, 14).toISOString()

    var isOverlapping = _areRangesOverlapping(initialRangeStart, initialRangeEnd, endOverlappingRangeStart, endOverlappingRangeEnd)
    ext_assert(isOverlapping === true)
  })

  it('accepts timestamp', function () {
    var initialRangeStart = new Date(2016, 10, 10, 13, 0, 0).getTime()
    var initialRangeEnd = new Date(2016, 11, 3, 15, 0, 0).getTime()

    var endOverlappingRangeStart = new Date(2016, 10, 5).getTime()
    var endOverlappingRangeEnd = new Date(2016, 10, 14).getTime()

    var isOverlapping = _areRangesOverlapping(initialRangeStart, initialRangeEnd, endOverlappingRangeStart, endOverlappingRangeEnd)
    ext_assert(isOverlapping === true)
  })

  it('throws an exception if the start date of the initial date range is after the end date', function () {
    var block = _areRangesOverlapping.bind(
      null,
      new Date(2016, 10, 7),
      new Date(2016, 10, 3),
      new Date(2016, 10, 5),
      new Date(2016, 10, 15)
    )
    ext_assert.throws(block)
  })

  it('throws an exception if the start date of the compared date range is after the end date', function () {
    var block = _areRangesOverlapping.bind(
      null,
      new Date(2016, 10, 3),
      new Date(2016, 10, 7),
      new Date(2016, 10, 15),
      new Date(2016, 10, 5)
    )
    ext_assert.throws(block)
  })
})
