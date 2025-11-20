class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function reverseList(head: ListNode | null): ListNode | null {
	if(head === null){
		return head;
	}
	let prev = head;
	let next = head.next;
	head.next = null;
	while(head !== null){
		prev = head;
		head = next;
		if(head == null){
			return prev;
		}
		next = head.next;
		head.next = prev;
	}

	return head;
};



const l5 = new ListNode(5, null);
const l4 = new ListNode(4, l5);
const l3 = new ListNode(3, l4);
const l2 = new ListNode(2, l3);
const l1 = new ListNode(1, l2);

console.log(reverseList(l1));