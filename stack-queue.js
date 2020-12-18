//Implementation Stack by using link list
/*
class Stack {
  constructor(){
    this.top = null;
    this.buttom = null;
    this.length = 0;
  }

  //get top node
  peek() {
    return this.top;

  }
  push(value) {

    const newNode = new Node(value);
    if(this.isEmpty()){
      this.buttom = newNode;
      this.top = newNode;
      this.length = 1;
      return this
    }
    const holdingPointer = this.top;
    this.top = newNode;
    this.top.next = holdingPointer;
    this.length++;
    return this;
  }
  pop() {
    if(!this.top) {
      return null;
    }
    if(this.top === this.bottom){
      this.bottom = null;
    }
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;

  }

  isEmpty() {
    return this.length === 0 ? true : false;
  }

  
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('twitter');
myStack.push('yotube');
//myStack.printList();
myStack.peek();
myStack.pop();
//myStack.printList();

*/

//Implementation stack by using array

class Stack {
    constructor(){
      this.array = [];
    }
  
    peek() {
      return this.array[this.array.length -1];
    }
  
    push(value){
      this.array.push(value);
      return this.array;
    }
    pop() {
      this.array.pop();
      return this
    }
  }
  
  const myStack = new Stack();
  myStack.push('google');
  myStack.push('udemy');
  myStack.push('twitter');
  myStack.push('yotube');
  myStack.pop();
  myStack.pop();
  
  
  //Implementation queue by using link list
  
  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
  
    peek() {
      return this.first;
    }
    enqueue(value){
      const newNode = new Node(value);
      if(this.length === 0){
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
  
      }else {
        const currentHolding = this.last;
        currentHolding.next = newNode;
        this.last = newNode;
        this.length ++;
      }
      return this;
    }
  
    dequeue(){
      if(!this.first){
        return null
      }
      if(this.first === this.last){
        this.last = null;
      }
      this.first = this.first.next;
      this.length --;
      return this
    }
  }
  
  const myQueue = new Queue();
  myQueue.enqueue('Joy');
  myQueue.enqueue('Matter');
  myQueue.enqueue('Slvy');
  myQueue.enqueue('Yoyo');
  myQueue.peek();
  myQueue.dequeue();

  class CrazyQueue {
    constructor(){
      this.first = [];
      this.last = [];
  
    }
  
    enqueue(value) {
       const length = this.first.length;
       for(let i = 0; i < length; i ++){
         this.last.push(this.first.pop())
       }
  
       this.last.push(value);
       return this;
    }
  
    dequeue() {
      const length = this.last.length;
      for(let i = 0; i < length; i++){
        this.first.push(this.last.pop())
      }
      this.first.pop();
      return this;
    }
  
    peek(){
      if(this.last.length > 0){
        return this.last[0]
      }
      return this.first[this.first.length -1];
    }
  }
  
  const myQueue = new CrazyQueue();
  myQueue.peek();
  myQueue.enqueue('Joy');
  myQueue.enqueue('Matt');
  myQueue.enqueue('Pavel');
  myQueue.peek();
  myQueue.dequeue();
  myQueue.dequeue();
  myQueue.dequeue();
  myQueue.peek();