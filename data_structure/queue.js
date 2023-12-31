class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    isEmpty() {
        return this.front == null && this.rear === null;
    }
    push(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) this.front = newNode;
        else this.rear.next = newNode;
        // after doing all that we are going to shift the new node rear pointer to the new node

        this.rear = newNode;
    }

    popleft() {
        if (this.isEmpty()) return;
        const returnValue = this.front;
        this.front = this.front.next;
        // this.front == null
        // previously in the queue there was only one element and that was deleted
        // so this.rear have to be shifted to newNode;
        if (!this.front) this.rear = null;

        return returnValue;
    }
}
