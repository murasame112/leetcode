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

function goodNodes(root: TreeNode | null): number {
	if(root == null) return 0;
	let counter = 0;
	const stack: {node: TreeNode, max: number}[] = [];
	stack.push({node: root, max: root.val});
	while(stack.length > 0){
		let current = stack.pop();
		let max = current!.max;;
		if(current!.node.val >= current!.max){
			counter++;
			max = current!.node.val;
		}
		if(current!.node.right !== null) stack.push({node: current!.node.right, max: max});
		if(current!.node.left !== null) stack.push({node: current!.node.left, max: max});
	}
	return counter;
};


const t8 = new TreeNode(4, null, null);
const t7 = new TreeNode(7, null, null);
const t6 = new TreeNode(8, null, null);
const t5 = new TreeNode(9, null, null);
const t4 = new TreeNode(2, t7, t8);
const t3 = new TreeNode(6, null, null);
const t2 = new TreeNode(1, t5, t6);
const t1 = new TreeNode(5, t3, t4);
const t0 = new TreeNode(3, t1, t2);


const s8 = new TreeNode(8, null, null);
const s7 = new TreeNode(9, null, null);
const s6 = new TreeNode(2, s7, s8);
const s5 = new TreeNode(4, null, null);
const s4 = new TreeNode(7, null, null);
const s3 = new TreeNode(6, null, null);
const s2 = new TreeNode(1, s5, s6);
const s1 = new TreeNode(5, s3, s4);
const s0 = new TreeNode(3, s1, s2);

console.log(goodNodes(t0));