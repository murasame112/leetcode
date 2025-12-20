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

type LeveledNode = {
	node: TreeNode;
	level: number;
}
function pathSum(root: TreeNode | null, targetSum: number): number {
	if(root == null) return 0;

	const sums = new Map<number, number[]>();

	let counter: number = 0;
	let stack: LeveledNode[] = [];
	stack.push({node: root, level: 0});

	while(stack.length > 0){
		let current = stack.pop();
		let level = current!.level;
		let value = current!.node.val;
		
		let updateCounter = updateSums(sums, level, value, targetSum);
		counter += updateCounter;

		if(current!.node.right != null) stack.push({node: current!.node.right, level: level + 1})
		if(current!.node.left != null) stack.push({node: current!.node.left, level: level + 1})

	}
	return counter;
    
};

function updateSums(sums: Map<number, number[]>, level: number, value: number, target: number): number{
	let counter = 0;
	if(value == target) counter++;

	if(level == 0){
		sums.set(level, [value]);
		return counter;
	}
	let valsOrig = sums.get(level - 1);
	let vals = [...valsOrig!];
	if(vals){
		for(let i = 0; i < vals.length; i++){
			let element = vals[i];
			element += value;
			if(element == target) counter++;
			vals[i] = element;
		}
		vals.push(value);
		sums.set(level, vals);
	}
	return counter;
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
//const targetSum = 14;


const s8 = new TreeNode(1, null, null);
const s7 = new TreeNode(-2, null, null);
const s6 = new TreeNode(3, null, null);
const s5 = new TreeNode(11, null, null);
const s4 = new TreeNode(2, null, s8);
const s3 = new TreeNode(3, s6, s7);
const s2 = new TreeNode(-3, null, s5);
const s1 = new TreeNode(5, s3, s4);
const s0 = new TreeNode(10, s1, s2);
const targetSum = 8;

console.log(pathSum(s0, targetSum));