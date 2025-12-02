class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function pairSum(head: ListNode | null): number {
    return 0;
};

const l7 = new ListNode(7, null);
const l6 = new ListNode(6, l7);
const l5 = new ListNode(5, l6);
const l4 = new ListNode(4, l5);
const l3 = new ListNode(3, l4);
const l2 = new ListNode(2, l3);
const l1 = new ListNode(1, l2);
console.log(pairSum(l1));