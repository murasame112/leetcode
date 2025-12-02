class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function pairSum(head: ListNode | null): number {
	if(head === null) return 0;
	let max: number = 0;
	let n = 0;
	const stack: number[] = [];
	let current: ListNode | null = head;
	while(current != null){
		n++;
		stack.push(current.val);
		current = current.next;
	}
	current = head;
	for(let i = 0; i < (n/2); i++){
		let topVal = stack.pop();
		let sum = current!.val + topVal!;
		if(sum > max){
			max = sum;
		}
		current = current!.next;
	}

  return max;
};


const l6 = new ListNode(6, null);
const l5 = new ListNode(5, l6);
const l4 = new ListNode(4, l5);
const l3 = new ListNode(3, l4);
const l2 = new ListNode(2, l3);
const l1 = new ListNode(1, l2);
console.log(pairSum(l1));


// ======== Solution 1 - with extra array
/*
function pairSum(head: ListNode | null): number {
	if(head === null) return 0;
	let max: number = 0;
	let n = 0;
	const stack: number[] = [];
	let current: ListNode | null = head;
	while(current != null){
		n++;
		stack.push(current.val);
		current = current.next;
	}
	current = head;
	for(let i = 0; i < (n/2); i++){
		let topVal = stack.pop();
		let sum = current!.val + topVal!;
		if(sum > max){
			max = sum;
		}
		current = current!.next;
	}

  return max;
};
*/