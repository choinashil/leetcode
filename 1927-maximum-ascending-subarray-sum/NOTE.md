```
var maxAscendingSum = function(nums) {
let max = 0;
let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) {
            sum += nums[i];
        } else {
            sum = nums[i];
        }

        if (max < sum) {
            max = sum;
        }
    }

    return max;
};
```

### i가 0일 때 처리

- i가 0일 때 자바스크립트는 음수 인덱스를 허용하지 않으므로 nums[i - 1]은 undefiend 이다.
- undefined와 숫자의 비교는 JavaScript의 타입 변환 규칙에 의해 false로 평가되므로 i가 0일 때는 항상 nums[i]로 sum이 시작됨

### 값이 순차적이지 않을 때 sum 초기화 처리

### max 업데이트 시점

- i가 바뀌어 sum이 새롭게 계산될 때마다 기존 max와 비교하여 업데이트

### max 초기값으로 -Infinity 사용

- `-Infinity` 는 자바스크립트에서 가장 작은 값
- 음수의 합과 비교하는 경우에도 올바르게 작동
- 이 문제에서는 양수의 합을 비교하기 때문에 max의 초기값을 0으로 설정해도 문제가 없었으나 음수와 비교해야 하는 케이스에서는 0 사용 시 결과가 잘못될 수 있읃ㅁ
