/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    const queue = [];
    queue.push([0, 0, 1]);
    
    let minPath = -1;

    while (queue.length) {
        const [row, col, path] = queue.shift();

        if (row === grid.length - 1 && col === grid[0].length - 1 && grid[row][col] === 0) {
            minPath = path;
            break;
        }
        
        if (row < 0 || col < 0 || row > grid.length - 1 || col > grid[0].length - 1 || grid[row][col] === 1) {
            continue;
        }

        grid[row][col] = 1;

        queue.push([row - 1, col - 1, path + 1]);
        queue.push([row - 1, col + 1, path + 1]);
        queue.push([row + 1, col - 1, path + 1]);
        queue.push([row + 1, col + 1, path + 1]);
        queue.push([row, col - 1, path + 1]);
        queue.push([row - 1, col, path + 1]);
        queue.push([row, col + 1, path + 1]);
        queue.push([row + 1, col, path + 1]);
    }

    return minPath;
};