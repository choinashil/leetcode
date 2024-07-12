/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  const greatest = Math.max(...candies);

  return candies.map((candy) => {
    if (candy === greatest) {
      return true;
    } else {
      return candy + extraCandies >= greatest;
    }
  });
};