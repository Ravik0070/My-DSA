// FIFO
class Queue {
  constructor() {
    this.items = {};
    this.itemToAddKey = 0;
    this.itemToRemoveKey = 0;
    this.length = 10;
  }
  enque(data) {
    if (this.IsFull()) {
      return undefined;
    }
    this.items[this.itemToAddKey] = data;
    this.itemToAddKey++;
  }
  deque() {
    if (this.isEmpty()) {
      return undefined;
    }
    delete this.items[this.itemToRemoveKey];
    this.itemToRemoveKey++;
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.itemToRemoveKey];
  }
  isFull() {
    return Object.keys(this.items).length === this.length;
  }
  isEmpty() {
    return Object.keys(this.items).length === 0;
  }
  size() {
    return Object.keys(this.items).length;
  }
}

const myQueue = new Queue();

myQueue.enque(10);
myQueue.enque(20);
myQueue.enque(30);
myQueue.deque();
console.log(myQueue.peek());
console.log(myQueue.isEmpty());
console.log(myQueue.isFull());
console.log(myQueue.size());
console.log(myQueue);
