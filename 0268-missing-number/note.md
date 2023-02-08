# 1

어떤 방식으로 풀었는지 메모가 남겨져 있어 도움이 된 풀이
이걸 보니 내가 푼 방식은 Brute Force에 가까운 것 같다.

이 분이 적어놓은 Optimized은 0부터 n(배열의 길이)까지의 합을 모두 더한 뒤,
배열을 순회하며 각 값을 빼서 남은 값이 뭔지 확인하는 방법

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const n = nums.length;
  let sum = (n * (n + 1)) / 2;
  nums.forEach((num) => {
    sum -= num;
  });
  return sum;
};

/*
Requirements
- Given array `nums` containing `n` distinct numbers in range `[0, n]`, return only number in range that's missing from the array.

Brute Force
- Sort `nums` array.
- Iterate through `nums` and find missing number by checking if difference between prev and next is equal to 1.
- Return missing number.
- Runtime: O(nlogn)
- Space: O(1)

Optimized
- Calculate sum of array using algorithm.
- Iterate through `nums` array subtracting each element from the sum.
- Return what is left of the sum.
- Runtime: O(n)
- Space: O(1)
*/
```

# 2

map을 사용한 방법

```js
var missingNumber = function (nums) {
  const map = new Map();
  for (let num of nums) {
    map.set(num, true);
  }
  for (let i = 0; i <= nums.length; i++) {
    if (!map.has(i)) {
      return i;
    }
  }
};
```
