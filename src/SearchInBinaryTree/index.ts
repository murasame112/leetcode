class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
	if (!root) return null;

	while ( root !== null) {
		if (root.val === val) break;
		else if (root.val > val) root = root.left;
		else root = root.right;
	}
	return root;
    
};

const s7 = new TreeNode(13, null, null);
const s6 = new TreeNode(7, null, null);
const s5 = new TreeNode(14, s7, null);
const s4 = new TreeNode(4, null, s6);
const s3 = new TreeNode(1, null, null);
const s2 = new TreeNode(10, null, s5);
const s1 = new TreeNode(3, s3, s4);
const s0 = new TreeNode(8, s1, s2);

console.log(searchBST(s0, 13));

// 298