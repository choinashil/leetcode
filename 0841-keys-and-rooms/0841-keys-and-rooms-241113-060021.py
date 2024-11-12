class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        queue = deque([])
        queue.append(0)

        visited = {}
        
        while len(queue):
            room = queue.popleft()

            if room in visited and visited[room]:
                continue
            
            visited[room] = True
            
            for key in rooms[room]:
                queue.append(key)

        return len(rooms) == len(visited)