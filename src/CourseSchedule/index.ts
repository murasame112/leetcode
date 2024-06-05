function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    
	const adjacencyList: Record<number, number[]> = {};
	let flag = true;

	const addToList = (list: Record<number, number[]>, edge: number[]) =>{
			if(list[edge[1]] !== undefined){
					let arr = list[edge[1]];
					arr.push(edge[0]);
					list[edge[1]] = arr;
			}else{
					list[edge[1]] = [edge[0]];
			}
	}

	const dfs = (start: number) =>{
			visited[start] = true;
			if(adjacencyList[start] === undefined || adjacencyList[start].length == 0){
					if(stack.includes(start)){
							flag = false;
					}
					stack.push(start);
					return;
			}
			adjacencyList[start].forEach((element) => {
					if(!visited[element]){
							dfs(element);

							// visited przywrocenie?
					}
			});
			stack.push(start);
	}

	// ==============================================================================================
	let visited: boolean[] = [];
	for(let i = 0; i < prerequisites.length; i++){
			addToList(adjacencyList, prerequisites[i]);
			
	}
	
	for(let i = 0; i < numCourses; i++){
			visited[i] = false;
	}
	let stack: number[] = [];
	
	console.log(adjacencyList);
	
	for(let i = 0; i < numCourses; i++){
			if(!visited[i]){
					dfs(i);
			}
	}
	console.log(stack);
return flag;
};

//let numCourses = 6;
//let prerequisites = [[0,3], [1,0], [2,1], [2,4], [3,5], [4,3], [4,5]];


let numCourses = 2;
let prerequisites = [[1,0],[0,1]];


console.log(canFinish(numCourses, prerequisites));

// robimy topological sort (dfs'em)
// jesli wspiujemy na stos cos co juz jest na nim, to wywalamy false
// jesli wpiszemy wszystko na stos to koniec i jest git, true

//===
// visited resetowane w 47? i potem sprawdzanie, czy jesli np 