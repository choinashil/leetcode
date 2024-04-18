# 내 코드

```js
var longestConsecutive = function (nums) {
  nums.sort((a, b) => a - b);

  let max = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
      continue;
    }

    if (nums[i] === nums[i + 1] - 1) {
      count++;
    } else {
      if (max < count + 1) {
        max = count + 1;
      }
      count = 0;
    }
  }

  return Math.max(max, count);
};
```

# 1. 내 풀이의 정돈된 버전

```js
var longestConsecutive = function (nums) {
  const n = nums.length;

  if (n === 0) {
    return 0;
  }

  nums.sort((a, b) => a - b);

  let cnt = 1;
  let maxi = 0;

  for (let i = 1; i < n; i++) {
    if (nums[i] !== nums[i - 1]) {
      if (nums[i] === nums[i - 1] + 1) {
        cnt++;
      } else {
        maxi = Math.max(maxi, cnt);
        cnt = 1;
      }
    }
  }

  return Math.max(maxi, cnt);
};
```

1. 처음에 나도 count 의 초기값을 1로 설정했었는데
   그러다보니 `[]` 케이스에서 1이 반환되어버리는 것 때문에 0으로 바꿨다.
   0으로 바꾸니 연속되지 않은 시점에 count에 +1 을 해줘야했다.
   선택사항인 것 같기는 하지만 `[]` 케이스를 별도로 처리하고 count 를 1로 시작하는 것이 더 직관적인 것 같다

2. 동일한 숫자가 나열될 때 처리
   `[1,2,0,1]` 케이스에서 정렬 후 `[0, 1, 1, 2]`가 되면서
   `1, 1` 부분에서 순차적인 증가가 없어 카운트를 제대로 하지 못 하는 문제가 있었다
   굳이 배열에서 중복을 제거할 필요는 없었는데 방법이 떠오르지않아 splice 로 제거시켰는데,
   이 코드에서는 중복일 때 그냥 건너띄도록 조건을 추가하여 좀 더 간단히 처리했다

내가 가장 처음 떠올린 방식 그대로를 구현한 코드

# 2. map 사용

```js
var longestConsecutive = function (nums) {
  const map = {};
  nums.forEach((num) => (map[num] = true));

  nums.sort((a, b) => a - b);

  let max = 0;
  let count = 0;

  const mapList = Object.keys(map);

  for (let i = 0; i < mapList.length; i++) {
    if (map[Number(mapList[i]) - 1]) {
      continue;
    }

    while (map[Number(mapList[i]) + count]) {
      count++;
    }

    max = Math.max(max, count);
    count = 0;
  }

  return Math.max(max, count);
};
```

# 3. set 사용

```js
var longestConsecutive = function (nums) {
  const set = new Set(nums);

  nums.sort((a, b) => a - b);

  let max = 0;
  let count = 0;

  for (const value of set) {
    if (set.has(value - 1)) {
      continue;
    }

    while (set.has(value + count)) {
      count++;
    }

    max = Math.max(max, count);
    count = 0;
  }

  return Math.max(max, count);
};
```

map 에 value 로 무의미한 값을 넣고 있는 부분이 걸리기도 하고,
map 을 사용하는 이유가 중복값 제거 + O(1) 으로 접근하기 위함이어서
그러려면 set 을 사용하는 것이 더 깔끔하게 작성 가능할 것 같았다
has 메서드도 직관적이어서 좋은 듯
