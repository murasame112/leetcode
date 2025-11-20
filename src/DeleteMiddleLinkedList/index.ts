class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function deleteMiddle(head: ListNode | null): ListNode | null {
	if(head === null || head.next === null){
		return null;
	}
	let first = head;
	let second: ListNode | null | undefined = head.next;

	while(first !== null && second !== null){
		second = second?.next?.next;
		if(second === undefined || second === null){
			first.next = first.next!.next;
			return head;
		}else{
			first = first.next!;
		}
	}
	return head;
};

const l5 = new ListNode(5, null);
const l4 = new ListNode(4, l5);
const l3 = new ListNode(3, l4);
const l2 = new ListNode(2, l3);
const l1 = new ListNode(1, l2);

console.log(deleteMiddle(l1));