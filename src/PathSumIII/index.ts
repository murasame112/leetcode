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

/*
dla każdego poziomu zapamiętywać wszystkie sumy w hash map, np:
0: [3]
1: [8, 5]
2: [14, 11, 6]
cofamy w górę o 1 poziom, więc dla kazdego z 2: odemujemy 6 i dodajemy 2 (tak naprawdę zerujemy poziom 2 i dodajemy do niego na nowo 2)
2: [10, 7, 2]
3: [17, 14, 9, 7]
cofamy w górę o 1 poziom, więc dla każdego z 3: odejmujemy 7 i dodajemy 4 (tak naprawdę zerujemy poziom 3 i dodajemy do niego na nowo 4)
3: [14, 11, 6, 4]
cofamy w górę o 3 poziomy, więc zerujemy wszystko oprócz 0: i potem dodajemy 1
1: [4, 1]
2: [13, 10, 9]
cofamy w górę o 1 poziom, więc zerujemy poziom 2 i dodajemy do niego 8
2: [12, 9, 8]
rezultat - 14 wystąpiło 3 razy - linia 16, 19 i 21

1 - najpierw zaimplementować dfs który pilnuje na jakim poziomie jest. do stacka można zapisywać {TreeNode, level}
*/
function pathSum(root: TreeNode | null, targetSum: number): number {
	if(root == null) return 0;

	let counter: number = 0;
	let level: number = 0;
	let levelSum: number[] = [];
	let stack: TreeNode[] = [];
	stack.push(root);
	while(stack.length > 0){
		let current = stack.pop();

	}
	return 0;
    
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


const targetSum = 14;
console.log(pathSum(t0, targetSum));