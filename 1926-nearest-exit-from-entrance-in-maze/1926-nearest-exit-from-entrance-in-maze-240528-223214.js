/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
  const queue = [];
  const visited = {};

  queue.push([...entrance, 0]);

  let result = -1;

  while (queue.length) {
    const matrix = queue.shift();

    const [row, col, step] = matrix;

    if (visited[`${row}.${col}`]) {
      continue;
    }
    
    if (row < 0 || col < 0 || row > maze.length - 1 || col > maze[0].length - 1 || maze[row][col] === '+') {
      continue;
    }

    visited[`${row}.${col}`] = true;

    const isEntrance = row === entrance[0] && col === entrance[1];

    if (!isEntrance && (row === 0 || col === 0 || row === maze.length - 1 || col === maze[0].length - 1)) {
      result = step;
      break;
    }

    queue.push([row, col - 1, step + 1]);
    queue.push([row - 1, col, step + 1]);
    queue.push([row, col + 1, step + 1]);
    queue.push([row + 1, col, step + 1]);
  }

  return result;
};