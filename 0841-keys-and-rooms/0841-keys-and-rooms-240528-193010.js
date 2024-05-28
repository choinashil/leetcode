/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
  const queue = [];
  const visited = [];

  queue.push(rooms[0]);
  visited.push(0);

  while (queue.length) {
    const room = queue.shift();

    for (const key of room) {
      if (visited.includes(key)) {
        continue;
      }

      visited.push(key);
      queue.push(rooms[key]);
    }
  }

  return rooms.length === visited.length;
};