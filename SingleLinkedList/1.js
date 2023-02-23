class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
//class always good to starrt with Caps
class SingleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // traverse(){
    //     var current=this.head;
    //     while(current){
    //         console.log(current.val);
    //         current=current.next;
    //     }
    // }


    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
            this.length++;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;

        }
        return this;
    }
    //removing first
    shift() {
        if (!this.head) return undefined;
        let current = this.head;
        this.head = current.next;
        this.length--;
        return current;
    }

    pop() {
        let current = this.head;
        let newtail = current;
        while (current.next != null) {
            newtail = current;
            current = current.next;
        }
        this.tail = newtail;
        this.tail.next = null;
        this.length--;
        if (this.length == 0) {
            this.head = null;
            this.tail = null;
        }
        return current;

    }
    //adding first
    unshift(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;

        }
        this.length++;
        return this;
    }
    get(index){
        if(index<0 || index>=this.length) return false
        var counter=0;
        var current=this.head;
        while(counter!=index){
            current=current.next;
            counter++;
        }
        return current;
    }
    insert(index,val){
        //1235
        if(index.length===this.length) return this.push(val);
        if(index==0) return  this.unshift(val)
        var newNode=new Node(val);
        var prev=this.get(index-1);
        var temp=prev.next;
        prev.next=newNode;
        newNode.next=temp;
        this.length++;
        return true;
    }


}
let one = new SingleLinkedList();
one.push("1");
one.push("2");
one.push("4");
console.log(one)
console.log("*****")
one.insert(2,"5")
console.log(one)