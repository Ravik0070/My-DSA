class SinglyLinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertAtStart(data) {
    let current = new SinglyLinkedListNode(data);
    if (this.head) {
      current.next = this.head;
      this.head = current;
    } else {
      this.head = current;
    }
    this.size++;
  }

  insertAtLast(data) {
    const newNode = new SinglyLinkedListNode(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  insertAtIndex(data, n) {
    if (n <= 0 || n > this.size) {
      return;
    }
    const newNode = new SinglyLinkedListNode(data);
    if (n === 1) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let count = 1;
      let current = this.head;
      let before;
      while (count < n) {
        before = current;
        current = current.next;
        count++;
      }
      newNode.next = current;
      before.next = newNode;
    }
    this.size++;
  }

  removeFromStart() {
    if (this.size <= 0) {
      return;
    }
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
    }
    this.size--;
  }

  removeFromLast() {
    if (this.size <= 0) {
      return;
    }
    if (this.size === 1) {
      this.head = null;
      this.size = 0;
      return;
    }
    let current = this.head;
    let before;
    while (current.next !== null) {
      before = current;
      current = current.next;
    }
    before.next = null;
    this.size--;
  }

  removeFromIndex(n) {
    if (this.size <= 0 || this.size < n || n <= 0) {
      return;
    }
    if (n === 1) {
      this.head = this.head.next;
    } else {
      let count = 1;
      let current = this.head;
      let before;
      while (count < n) {
        before = current;
        current = current.next;
        count++;
      }
      before.next = current.next;
    }
    this.size--;
  }

  getDataFromIndex(n) {
    if (this.size < n || this.size < 0) {
      return;
    }
    let count = 1;
    let current = this.head;
    while (count < n) {
      current = current.next;
      count++;
    }
    console.log(current.value);
  }

  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const sl = new SinglyLinkedList();
sl.insertAtStart(100);
sl.insertAtStart(200);
sl.insertAtStart(600);
// sl.insertAtIndex(900, 2);
// sl.insertAtStart(700);
// sl.insertAtStart(800);
// sl.insertAtIndex(500, 3);
// sl.insertAtStart(300);
// sl.removeFromLast();
// sl.removeFromIndex(4);
// sl.removeFromStart();
// sl.removeFromIndex(2);
// sl.getDataFromIndex(4);
sl.printListData();
