# 내 풀이

```js
var numIslands = function (grid) {
  let count = 0;

  const visited = {};

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1" && !visited[`${i}.${j}`]) {
        bfs(i, j);
        count++;
      }
    }
  }

  return count;

  function bfs(i, j) {
    const queue = [];
    queue.push({ i, j });

    while (queue.length) {
      const current = queue.shift();

      if (visited[`${current.i}.${current.j}`]) {
        continue;
      }

      visited[`${current.i}.${current.j}`] = true;

      let top;
      let right;
      let bottom;
      let left;

      if (current.i > 0) {
        top = grid[current.i - 1][current.j];
      }

      if (current.j < grid[current.i].length - 1) {
        right = grid[current.i][current.j + 1];
      }

      if (current.i < grid.length - 1) {
        bottom = grid[current.i + 1][current.j];
      }

      if (current.j > 0) {
        left = grid[current.i][current.j - 1];
      }

      if (top === "1") {
        queue.push({ i: current.i - 1, j: current.j });
      }

      if (right === "1") {
        queue.push({ i: current.i, j: current.j + 1 });
      }

      if (bottom === "1") {
        queue.push({ i: current.i + 1, j: current.j });
      }

      if (left === "1") {
        queue.push({ i: current.i, j: current.j - 1 });
      }
    }
  }
};
```

visited 객체 두고, 방문한 곳 체크해가면서 순회하는데
처음에는 대상의 오른쪽과 아래쪽을 queue 에 추가하는 식으로 작성.
(0, 0)부터 시작하니 문제 없을 거라 생각했는데 섬의 모양에 따라 누락되는 지점들이 생겨
위쪽과 왼쪽도 queue 에 추가하도록 코드 추가

# 1

```js
var numIslands = function (grid) {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        dfs(i, j);
        count++;
      }
    }
  }

  return count;

  function dfs(i, j) {
    if (
      i < 0 ||
      j < 0 ||
      i >= grid.length ||
      j >= grid[0].length ||
      grid[i][j] !== "1"
    ) {
      return;
    }

    grid[i][j] = "0";

    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  }
};
```

전반적인 구현 방식은 동일함

- visited 대신 grid[i][j] 를 '0' 으로 바꾸면서 다시 방문했을 때 건너뛰도록 함 (메모리 절약)
- dfs + 재귀 사용해서 queue 없이 구현 (메모리 절약)
- 각 방향별 예외 처리를 단순화하여 하나의 조건문으로 처리
