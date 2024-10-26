class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class singleLinkedList {
  constructor() {
    this.head = null;
  }
  insertHead(data) {
    let newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }
  deleteStart(data) {
    let current = this.head;
    if (current.data == data) {
      return (this.head = current.next);
    }
    while (current.next && current.next.data != data) {
      current = current.next;
    }
    if (current.next && current.next.data == data) {
      current.next = current.next.next;
    } else {
      console.log("404 not found");
    }
  }

  deleteAtAnyIndex(index) {
    if (!this.head) {
      return "console.log(No List)";
    }
    if (index == 0) {
      this.head = this.head.next;
    }
    let current = this.head;
    let count = 0;
    while (current && count < index - 1) {
      current = current.next;
      count++;
    }
    if (!current || !current.next) {
      ` console.log("Out of Boundry")`;
      return;
    }
    current.next = current.next.next;
  }

  deleteFirst() {
    if (this.head) {
      this.head = this.head.next;
    } else {
      console.log("No head");
    }
  }
  reverse() {
    let current = this.head;
    let next = null,
      prev = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return this.head=prev;
  }
  tail(data) {
    let tailNode = new Node(data);
    if (!this.head) {
      this.head = tailNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = tailNode;
    }
  }
}
let one = new singleLinkedList();
one.insertHead(10);
one.insertHead(0);
one.insertHead(20);
one.insertHead(100);
one.insertHead(10);
one.insertHead(200);
one.tail(100);
console.log(JSON.stringify(one)); // Display the entire linked list

// one.deleteFirst();
one.deleteAtAnyIndex(0);
one.deleteAtAnyIndex(2);

console.log(JSON.stringify(one)); // Display the entire linked list
