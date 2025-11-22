class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function oddEvenList(head: ListNode | null): ListNode | null {
	if(head === null || head.next === null){
		return head;
	}
	let oddFirst: ListNode | null = head;
	let evenFirst: ListNode | null = head.next;
	let connect: ListNode = head.next;
	let oddSecond: ListNode | null, evenSecond: ListNode | null;
	while(evenFirst !== null && oddFirst !== null){
		oddSecond = oddFirst.next!.next;
		if(oddSecond !== null){
			oddFirst.next = oddSecond;
			oddFirst = oddSecond;
		}else{
			oddFirst.next = connect;
			evenFirst.next = null;
			break;
		}
		evenSecond = evenFirst!.next!.next;
		if(evenSecond !== null){
			evenFirst!.next = evenSecond;
			evenFirst = evenSecond;
		}else{
			oddSecond!.next = connect;
			evenFirst.next = null;
			break;
		}
	}
	
	return head;
};

const l7 = new ListNode(7, null);
const l6 = new ListNode(6, l7);
const l5 = new ListNode(5, l6);
const l4 = new ListNode(4, l5);
const l3 = new ListNode(3, l4);
const l2 = new ListNode(2, l3);
const l1 = new ListNode(1, l2);
console.log(oddEvenList(l1));
