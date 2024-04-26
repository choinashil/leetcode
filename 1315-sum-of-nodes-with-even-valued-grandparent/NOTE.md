# 내 풀이

```js
var sumEvenGrandparent = function (root) {
  let result = 0;

  function dfs(node, arr = [], level = 0) {
    if (!node) {
      return;
    }

    const isEvenValue = !(node.val % 2);
    arr[level] = isEvenValue;

    if (arr[level - 2]) {
      result += node.val;
    }

    dfs(node.left, arr, level + 1);
    dfs(node.right, arr, level + 1);

    arr.pop();

    return node;
  }

  dfs(root);

  return result;
};
```

부모들의 even 여부가 담긴 배열과 해당 노드의 level 을 넘겨
level - 2 로 grandparent even 여부에 따라 더해지도록 함 -> 추가적인 메모리 필요

# 1

```js
var sumEvenGrandparent = function (root) {
  function DFS(node, parent, grandParent) {
    if (node === null) return 0;
    let curr = grandParent && grandParent.val % 2 === 0 ? node.val : 0;
    return curr + DFS(node.left, node, parent) + DFS(node.right, node, parent);
  }
  return DFS(root, null, null);
};
```

parent, grandParent 를 아래에 같이 넘겨주면서 계산하고 계산값 자체를 반환하여 추가적인 메모리 없이 값을 더함
