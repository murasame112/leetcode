
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
 

function maxDepth(root: TreeNode | null): number {
	if(root == null) return 0;
	let stack: {node: TreeNode, level: number}[] = [];
	let depth = 0;
	stack.push({node: root, level: 1});
	while(stack.length > 0){
		let current = stack.pop()!;
		depth = Math.max(depth, current.level);
		
		if(current.node.right !== null) stack.push({node: current.node.right, level: current.level + 1});
		if(current.node.left !== null) stack.push({node: current.node.left, level: current.level + 1});
	}
	return depth;
};

const t4 = new TreeNode(7, null, null);
const t3 = new TreeNode(15, null, null);
const t2 = new TreeNode(20, t3, t4);
const t1 = new TreeNode(9, null, null);
const t0 = new TreeNode(3, t1, t2);

console.log(maxDepth(t0));


/* === solution 1

function maxDepth(root: TreeNode | null): number {
	if(root == null){
		return 0;
	}else{
		let leftMax = maxDepth(root.left);
		let rightMax = maxDepth(root.right);
		return 1 + Math.max(leftMax, rightMax); 
	}
};

*/