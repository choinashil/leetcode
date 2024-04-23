# 내 풀이

original 을 가지고 순회 후 route 배열에 찾아가는 위치 정보를 저장해두었다가
target 과 동일한 node 를 찾았을 때 dfs 를 빠져나와서
cloned 의 root 로부터 route 에 담긴 정보를 찾아 동일한 node 를 찾아서 반환하는 방식

# 1

```js
var getTargetCopy = function (original, cloned, target) {
  function dfs(oNode, cNode) {
    if (!oNode) {
      return;
    }

    if (oNode === target) {
      return cNode;
    }

    const leftResult = dfs(oNode.left, cNode.left);
    const rightResult = dfs(oNode.right, cNode.right);

    return leftResult || rightResult;
  }

  return dfs(original, cloned);
};
```

1. 위치 정보 따로 가질 필요 없이 순회할 때 original 과 cloned 를 같이 넘김.
   original 을 기준으로 찾고, target 과 동일한 node 를 찾았을 때 cloned 의 노드를 반환.

2. left 순회한 정보와 right 순회한 정보 중 값이 있는 것을 return 하는 방식
