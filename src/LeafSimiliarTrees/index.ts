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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
	if(root1 === null || root2 === null) return false;
	const left: number[] = getLeafStack(root1);
	const right: number[] = getLeafStack(root2);

	if(left.length != right.length) return false;
	while(left.length > 0){
		if(left.pop() !== right.pop()) return false;
	}

  return true;
};

function getLeafStack(root: TreeNode): number[]{
	const stack: TreeNode[] = [];
	const result: number[] = [];
	stack.push(root);
	while(stack.length > 0){
		let current = stack.pop();
		
		if(current!.right !== null) stack.push(current!.right);
		if(current!.left !== null) stack.push(current!.left);
		if(current!.left === null && current!.right === null) result.push(current!.val); 
	}

	return result;
}


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

console.log(leafSimilar(t0, s0));