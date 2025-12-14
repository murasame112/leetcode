class SmallestInfiniteSet {
		smallest: number;
    available: number[];
    constructor() {
			this.smallest = 1;
			this.available = []; // nie musi byc posortowane - wystarczy moc wywolac na tym usuwanie_min z heapa. tak samo dodawanie do tego, to nie powinien byc push, tylko min_insert
    }

    popSmallest(): number {
			if(this.smallest < this.available[0] || this.available.length == 0){
				let res = this.smallest;
				this.smallest++;
				return res;
			}else{
				return this.min_delete();
			}
        
    }

    addBack(num: number): void {
			if(this.available.includes(num) || this.smallest <= num) {
				return;
			}
			this.min_insert(num);
    }

		private min_insert(num: number){
			this.available.push(num);
			if(this.available.length == 1) return;

			let index = this.available.length - 1;
			let parent = Math.floor((index - 1) / 2);
			while(this.available[parent] > this.available[index]){
				this.heapify(parent);
				index = parent;
				parent = Math.floor((index - 1) / 2);
			}
		}

		private min_delete(): number{
			if(this.available.length == 1) return this.available.pop()!;
			let res = this.available[0];
			this.available[0] = this.available.pop()!;
			this.heapify(0);
			return res;
		}
		
		private heapify(index: number){
			let smallest = index;
			let leftChild = 2 * index + 1;
			let rightChild = 2 * index + 2;
			
			if(leftChild < this.available.length && this.available[leftChild] < this.available[smallest]){
				smallest = leftChild;
			}
			if(rightChild < this.available.length && this.available[rightChild] < this.available[smallest]){
				smallest = rightChild;
			}
			if(smallest != index){
				let bufor = this.available[index];
				this.available[index] = this.available[smallest];
				this.available[smallest] = bufor;
				this.heapify(smallest);
			}
		}
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
let obj = new SmallestInfiniteSet();

console.log(obj.popSmallest());
console.log(obj.popSmallest());
obj.addBack(3);
console.log(obj.popSmallest());
obj.addBack(2);
console.log(obj.popSmallest());
console.log(obj.popSmallest());