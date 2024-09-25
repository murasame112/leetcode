class MinStack {
    stack: number[];
    minimums: number[];

    constructor() {
        this.stack = [];
        this.minimums = [];
    }

    push(val: number): void {
        this.stack.push(val);
        if (
            this.minimums[this.minimums.length - 1] > val ||
            this.minimums[this.minimums.length - 1] === undefined
        ) {
            this.minimums.push(val);
        } else {
            this.minimums.push(this.minimums[this.minimums.length - 1]);
        }
    }

    pop(): void {
        this.stack.pop();
        this.minimums.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.minimums[this.minimums.length - 1];
    }

    display() {
        console.log('stack: ', this.stack);
        console.log('min stack:', this.minimums);
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

let ms: MinStack = new MinStack();
ms.push(-2);
ms.push(0);
ms.push(-3);
ms.display();
console.log(ms.getMin());
ms.pop();
ms.display();
console.log(ms.top());
console.log(ms.getMin());
