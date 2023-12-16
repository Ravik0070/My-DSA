// LIFO
class Stack {
  constructor() {
    this.items = [];
    this.length = 10;
  }
  push(data) {
    this.items.push(data);
  }
  pop() {
    this.items.pop();
  }
  peek() {
    if(this.isEmpty()){
        return undefined;
    }
    let length = this.size();
    return this.items[length - 1];
  }
  isFull() {
    return this.items.length === this.length;
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
}

const myQueue = new Stack();

myQueue.enque(10);
myQueue.enque(20);
myQueue.enque(30);
myQueue.deque();
console.log(myQueue.peek());
console.log(myQueue.isEmpty());
console.log(myQueue.isFull());
console.log(myQueue.size());
console.log(myQueue);
