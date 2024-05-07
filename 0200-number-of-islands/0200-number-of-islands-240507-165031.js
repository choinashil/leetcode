/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let count = 0;
  
  const visited = {};

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1' && !visited[`${i}.${j}`]) {
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

      if (top === '1') {
        queue.push({ i: current.i - 1, j: current.j});
      }

      if (right === '1') {
        queue.push({ i: current.i, j: current.j + 1 });
      }

      if (bottom === '1') {
        queue.push({ i: current.i + 1, j: current.j});
      }

      if (left === '1') {
        queue.push({ i: current.i, j: current.j - 1 });
      }
    }
  }
};