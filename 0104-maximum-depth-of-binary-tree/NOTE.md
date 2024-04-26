# 내 풀이

```js
var maxDepth = function (root) {
  let maxDepth = 0;

  function dfs(node, count = 0) {
    if (!node) {
      return node;
    }

    count++;

    dfs(node.left, count);
    dfs(node.right, count);

    if (maxDepth < count) {
      maxDepth = count;
    }
  }

  dfs(root);

  return maxDepth;
};
```

maxDepth 변수를 따로 두기 위해 maxDepth 함수 안에 dfs 함수를 따로 두고 재귀.

# 1

```js
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }

  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  return 1 + Math.max(left, right);
};
```

따로 변수를 두지 않고 maxDepth 함수 자체를 재귀 함수로 활용.
dfs 사용해서 리프 노드까지 내려간 뒤, 자식 노드가 없으면 0 반환 -> 내 레벨 +1 하는 식으로 계산
그 뒤 left, right 비교해서 더 깊은 (더 큰) 숫자를 상위로 올려보내는 방식.
