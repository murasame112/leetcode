class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (head === null) {
        return null;
    }
		
		let length: number = countNodes(head);
		if (k > length){
			k = k % length;
		}
    for (let i = 0; i < k; i++) {
        head = singleRotation(head);
    }

    return head;
}
function countNodes(head: ListNode): number{
	let iter = 0;
	while (1){
		if(head.next == null){
			return iter+1;
		}else{
			iter++;
			head = head.next;
		}
	}
	return 0;
}

function singleRotation(head: ListNode) {
    let movedValue: number = head.val;
    let firstNode = head;
    let bufor: number;

    while (1) {
        bufor = head.val;
        head.val = movedValue;
        movedValue = bufor;

        if (head.next === null) {
            firstNode.val = movedValue;
            break;
        } else {
            head = head.next;
        }
    }
    return firstNode;
}

let head = [1, 2, 3, 4, 5];
let k = 2;
let h4 = new ListNode(head[4], null);
let h3 = new ListNode(head[3], h4);
let h2 = new ListNode(head[2], h3);
let h1 = new ListNode(head[1], h2);
let h0 = new ListNode(head[0], h1);

console.log(rotateRight(h0, k));
