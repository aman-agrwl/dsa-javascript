
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, 
// and return an array of the non-overlapping intervals that cover all the intervals in the input.


function mergeIntervals(intervals) {
  let result = [];
  let n = 0;
  result.push(intervals[0]);
  n = 1;
  for (let i = 1; i < intervals.length; i++) {
    if (result[n - 1][1] >= intervals[i][0]) {
      result[n - 1][1] = Math.max(result[n - 1][1], intervals[i][1]);
    } else {
      result.push(intervals[i]);
      n++;
    }

  }

  return result;

  return result;
}