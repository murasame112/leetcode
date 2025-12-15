function canVisitAllRooms(rooms: number[][]): boolean {
  const visited: boolean[] = Array(rooms.length).fill(false);
	let visitedCount: number = 0;
	const stack: number[] = [];
	stack.push(0);
	visited[0] = true;
	while(stack.length > 0){
		let current = stack.pop();
		visitedCount++;
		rooms[current!].forEach((el: number) => {
			if(!visited[el]){
				visited[el] = true;
				stack.push(el);
			}
		});
	}
	if(visitedCount == rooms.length) return true;
	return false;
};

//const rooms = [[1], [2], [3], []];
const rooms = [[1,3], [3,0,1], [2], [0]];
//const rooms = [[1,2],[2,1],[1]];
console.log(canVisitAllRooms(rooms));