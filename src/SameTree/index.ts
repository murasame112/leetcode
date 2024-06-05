class TreeNode {
	val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
	  this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}


function dfs(p: TreeNode, stack: (number|null)[] ){
	
	stack.push(p.val);
	if(p.left === null && p.right === null){
		return stack;
	}
	if(p.left != null){
		stack = dfs(p.left, stack);
	}else{
		stack.push(null);
	}
	if(p.right != null){
		stack = dfs(p.right, stack)
	}else{
		stack.push(null);
	}
	return stack;
}

function bfs(queue: (TreeNode|null)[], result: (number|null)[]){
	
	if(queue.length == 0){
		return result;
	}
	let node: TreeNode | null | undefined = queue.shift();
	
	if(node === undefined){
		return result;
	}else if(node === null){
		result.push(null);
		return bfs(queue, result);
	}else{
		result.push(node.val);
		if(node.left === null && node.right === null){
			return bfs(queue, result);
		}
		queue.push(node.left);
		queue.push(node.right);
		return bfs(queue, result);
	}
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
	

	/*
	=== DFS ===
	let resP: (number|null)[] = [];
	let resQ: (number|null)[] = [];
	if(p != null){
		resP = dfs(p, []);
	}
	if(q != null){
		resQ = dfs(q, []);
	}
	*/
	// === BFS ===
	let resP: (number|null)[] = [];
	let resQ: (number|null)[] = [];
	if(p != null){
		resP = bfs([p], []);
	}
	if(q != null){
		resQ = bfs([q], []);
	}
	return JSON.stringify(resP) == JSON.stringify(resQ);
};

let n7 = new TreeNode(7,null, null);
let n6 = new TreeNode(6,null, null);
let n5 = new TreeNode(5,null, null);
let n4 = new TreeNode(4,null, null);

let n3 = new TreeNode(3, n6, n7);
let n2 = new TreeNode(2, n4, n5);

let n1 = new TreeNode(1, n2, n3);




let p = new TreeNode(1,new TreeNode(2,null, null), new TreeNode(3,null, null));
let q = new TreeNode(1,new TreeNode(2,null, null), new TreeNode(3,null, null));

//let p = new TreeNode(1, new TreeNode(2,null, null), null);
//let q = new TreeNode(1, null, new TreeNode(2,null, null));
console.log(isSameTree(p,q));