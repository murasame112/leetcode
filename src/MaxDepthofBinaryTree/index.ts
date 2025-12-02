
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
	if(root == null){
		return 0;
	}else{
		let leftMax = maxDepth(root.left);
		let rightMax = maxDepth(root.right);
		return 1 + Math.max(leftMax, rightMax); 
	}
};

const t4 = new TreeNode(7, null, null);
const t3 = new TreeNode(15, null, null);
const t2 = new TreeNode(20, t3, t4);
const t1 = new TreeNode(9, null, null);
const t0 = new TreeNode(3, t1, t2);

console.log(maxDepth(t0));