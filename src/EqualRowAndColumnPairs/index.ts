function equalPairs(grid: number[][]): number {
  
	const rows = new Map<string, number>();
	for(let i = 0; i < grid.length; i++){
		let s = grid[i].toString();
		rows.set(s, (rows.get(s) || 0) + 1);
	}
	let str: string = "";
	let counter = 0;
	for(let i = 0; i < grid.length; i++){

		let col: number[] = [];
		for(let j = 0; j < grid.length; j++){
			col.push(grid[j][i]);
		}
		str = col.toString();
		rows.has(str) ? counter += rows.get(str)! : '';
	}
	return counter;
};

//const grid = [[3,2,1],[1,7,6],[2,7,7]];
const grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]];
console.log(equalPairs(grid));


/* solution 1
function equalPairs(grid: number[][]): number {
  
	const rows = new Map<string, number>();
	for(let i = 0; i < grid.length; i++){
		rows.has(grid[i].toString()) ? rows.set(grid[i].toString(), rows.get(grid[i].toString())! + 1) : rows.set(grid[i].toString(), 1);
	}
	let str = "";
	let counter = 0;
	for(let i = 0; i < grid.length; i++){
		str = '';
		for(let j = 0; j < grid.length; j++){
			str += grid[j][i] + ',';
		}
		str = str.slice(0,-1);
		rows.has(str) ? counter += rows.get(str)! : '';
	}
	return counter;
};

*/