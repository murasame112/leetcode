class RecentCounter {
    constructor() {
        
    }

		queue: number[] = [];
    ping(t: number): number {
			this.queue.push(t);
			while(this.queue[0] < t - 3000 || this.queue[0] > t){
				this.queue.shift();
			}
			return this.queue.length;
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */


let obj = new RecentCounter();
let param_1 = console.log(obj.ping(1));
let param_2 = console.log(obj.ping(100));
let param_3 = console.log(obj.ping(3001));
let param_4 = console.log(obj.ping(3002));

// [t - 3000, t];

// 