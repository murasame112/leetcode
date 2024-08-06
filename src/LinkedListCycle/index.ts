class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// better answer (floyd's cycle finding algorithm)
function hasCycle(head: ListNode | null): boolean {
	if(head == null || head.next == null){
		return false;
	}

	let fast: ListNode | null = head.next.next;
	let slow: ListNode | null = head.next;

	while(1){
		if(fast == null || slow == null || fast.next == null){
			return false;
		}
		if(fast == slow){
			return true;
		}
		fast = fast.next.next;
		slow = slow.next;

	}

	return false;
}


// === my answer: 
// const listIndexes: Record<number, ListNode | null> = {}
// function hasCycle(head: ListNode | null): boolean {

// 	if(head == null || head.next == null){
// 		return false;
// 	}

// 	if(head.val in listIndexes){
// 		return true;
// 	}else{
// 		listIndexes[head.val] = head.next;
// 		if(head.next == null){
// 			return false;
// 		}
// 		return hasCycle(head.next);
// 	}
// }


let head = [3,2,0,-4];
let pos = 1;

// let head = [1,2];
// let pos = -1;


let h3 = new ListNode(head[3]);
let h2 = new ListNode(head[2], h3);
let h1 = new ListNode(head[1], h2);
let h0 = new ListNode(head[0], h1);

h3.next = h1;

// let h1 = new ListNode(head[1]);
// let h0 = new ListNode(head[0], h1);

console.log(hasCycle(h0));