class CircularLinkedListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertAtStart(data) {
    const newNode = new CircularLinkedListNode(data);
    if (this.head) {
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = newNode;
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
      newNode.next = this.head;
    }
  }

  insertAtLast(data) {
    const newNode = new CircularLinkedListNode(data);
    if (this.head) {
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = newNode;
      newNode.next = this.head;
    } else {
      this.head = newNode;
      newNode.next = this.head;
    }
  }

  removeFromStart() {
    if (this.head) {
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = this.head.next;
      this.head = current.next;
    } else {
      return;
    }
  }

  removeFromLast() {
    if (this.head) {
      if (this.head.next === null) {
        return;
      }
      let current = this.head;
      while (current.next.next !== this.head) {
        current = current.next;
      }
      current.next = this.head;
    } else {
      return;
    }
  }

  printListDataForward() {
    let current = this.head;
    do {
      console.log(current.data);
      current = current.next;
    } while (current !== this.head);
  }
}

const cl = new CircularLinkedList();
cl.insertAtStart(100);
cl.insertAtStart(200);
cl.insertAtStart(300);
cl.removeFromLast();
// cl.removeFromStart(300);
// cl.insertAtLast(400);
cl.printListDataForward();
