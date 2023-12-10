class DoublyLinkedListNode {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertAtStart(data) {
    let newNode = new DoublyLinkedListNode(data);
    if (this.size < 1) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  insertAtLast(data) {
    let newNode = new DoublyLinkedListNode(data);
    if (this.size < 1) {
      this.head = newNode;
    } else {
      let current = this.head;
      let before;
      while (current !== null) {
        before = current;
        current = current.next;
      }
      before.next = newNode;
      newNode.prev = before;
    }
    this.size++;
  }

  insertAtIndex(data, n) {
    let newNode = new DoublyLinkedListNode(data);
    if (this.size < n) {
      return;
    }
    if (this.size < 1) {
      this.head = newNode;
      this.size++;
    } else if (n == 1) {
      this.insertAtStart(data);
    } else {
      let current = this.head;
      let before;
      let count = 1;
      while (count < n) {
        before = current;
        current = current.next;
        count++;
      }
      newNode.prev = before;
      before.next = newNode;
      newNode.next = current;
      current.prev = newNode;
      this.size++;
    }
  }

  removeFromStart() {
    if (this.size < 1) {
      return;
    }
    if (this.size == 1) {
      this.head = null;
    } else {
      let current = this.head.next;
      current.prev = null;
      this.head = current;
    }

    this.size--;
  }

  removeFromLast() {
    if (this.size < 1) {
      return;
    }
    if (this.size == 1) {
      this.head = null;
    } else {
      let current = this.head;
      let before;
      while (current.next !== null) {
        before = current;
        current = current.next;
      }
      before.next = null;
    }

    this.size--;
  }

  removeFromIndex(n) {
    if (n < 1 || n > this.size) {
      return;
    } else if (n === 1) {
      this.removeFromStart();
    } else {
      let current = this.head;
      let before;
      let count = 1;
      while (count < n) {
        before = current;
        current = current.next;
        count++;
      }
      before.next = current.next;
      this.size--;
    }
  }

  getDataFromIndex(n) {
    let current = this.head;
    if (n < 1 || n > this.size) {
      return;
    } else if (n === 1) {
      console.log(current.data);
    } else {
      let count = 1;
      while (count < n) {
        current = current.next;
        count++;
      }
      console.log(current.data);
    }
  }

  printListData() {
    let current = this.head;
    while (current != null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const dl = new DoublyLinkedList();
dl.insertAtStart(100);
dl.insertAtStart(200);
dl.insertAtStart(300);
dl.insertAtStart(400);
// dl.insertAtLast(500);
// dl.insertAtLast(400);
// dl.insertAtIndex(1600, 4);
// dl.removeFromStart();
// dl.removeFromLast();
// dl.removeFromIndex(1);
// dl.getDataFromIndex(4);
dl.printListData();
