# 1

```js
var dailyTemperatures = function (temperatures) {
  const stack = [];
  const result = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length &&
      temperatures[stack[stack.length - 1]] < temperatures[i]
    ) {
      const index = stack.pop();
      result[index] = i - index;
    }

    stack.push(i);
  }

  return result;
};
```

solution 에서 발견한 코드

내가 구현한 코드와 다른 점

- 일단 스택 비었으면 넣고 시작.
- 인덱스에 해당하는 값이랑 스택에 있는 마지막 값을 비교하는 방식
- 스택에 값 자체를 넣는 게 아니라 인덱스를 넣는다. (제일 중요한 부분) 값은 temperatures 배열에서 참조하면 되기 때문!!
