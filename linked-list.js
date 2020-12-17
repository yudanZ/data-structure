//linked list
class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  class LinkedList {
    constructor(value){
      this.head = {
        value: value,
        next: null
      }
      this.tail = this.head;
      this.length = 1;
    }
  
    
  
    append(value){
      const newNode = new Node(value);
      this.tail.next = newNode;
      this.tail = newNode;
      this.length ++;
      return this
    }
    prepend(value){
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this.length ++;
      return this
    }
    printList(){
      const array = [];
      let currentNode = this.head;
      while(currentNode !== null){
        array.push(currentNode.value);
        currentNode = currentNode.next;
      }
  
      return array;
    }
    insert(index, value){
      if( index === 0 ){
        myLinkedList.prepend(value);
        return myLinkedList.printList()
      }
      if(index >= this.length){
        return this.append(value);
      }
      const newNode = new Node(value);
      const leader = this.traverseToIndex(index - 1);
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
      return this.printList()
    }
  
    traverseToIndex(index) {
      let counter = 0;
      let currentNode = this.head;
      while( counter !== index ){
        currentNode = currentNode.next;
        counter ++;
      }
      return currentNode;
    }
    remove(index){
      if(index === 0){
        this.head = this.head.next
      }
      const leader = this.traverseToIndex(index -1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      this.length--;
      return this.printList();
    }
  
    reverse(){
      if(this.length === 1){
        return this.head;
      }
      let first = this.head;
      this.tail = this.head;
      let second = first.next;
      while(second){
        const temp = second.next;
        second.next = first;
        first = second;
        second = temp;
      }
      this.head.next = null;
      this.head = first
      return this.printList()
    }
    
  }
  
  const myLinkedList = new LinkedList(10);
  //console.log(myLinkedList);
  
  myLinkedList.append(5);
  myLinkedList.append(16);
  myLinkedList.prepend(1);
  console.log(myLinkedList.printList());
  myLinkedList.insert(2, 99);
  myLinkedList.remove(2);
  console.log(myLinkedList);
  myLinkedList.reverse();
  
  
  /* Doubly linked lists */
  class DoublyLinkedList {
    constructor(value){
      this.head = {
        value: value,
        next: null,
        prev: null
      }
      this.tail = this.head;
      this.length = 1;
    }
  
    append(value) {
      const newNode = {
        value: value,
        prev: null,
        next: null
      };
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this
    }
  
    prepend(value) {
      const newNode = {
        value: value,
        prev: null,
        next: null
      };
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.length++;
      return this
    }
  
    traverseToIndex(index) {
      let counter = 0;
      let currentNode = this.head;
      while( counter !== index ){
        currentNode = currentNode.next;
        counter ++;
      }
      return currentNode;
    }
  
    printList(){
      const array = [];
      let currentNode = this.head;
      while(currentNode !== null){
        array.push(currentNode.value);
        currentNode = currentNode.next;
      }
  
      return array;
    }
  
    insert( index, value){
      //check params
      if( index >= this.length) {
        return this.append(value);
      }
      const newNode = {
        value: value,
        next: null,
        prev: null
      };
      const leader = this.traverseToIndex(index-1);
      const follower = leader.next;
      leader.next = newNode;
      newNode.prev = leader;
      newNode.next = follower;
      follower.prev = newNode;
      this.length++;
      return this.printList();
    }
    remove(index){
      if(index === 0){
        this.head = this.head.next;
        this.head.prev = null;
      }
      const leader = this.traverseToIndex(index -1);
      const unwantedNode = leader.next;
      const unwantedNextNode = unwantedNode.next;
      leader.next = unwantedNode.next;
      unwantedNextNode.prev = leader;
  
      this.length--;
      return this.printList();
    }
    
  }
  
  /*
  const myDoublyLinkedList = new DoublyLinkedList(10);
  myDoublyLinkedList.append(5);
  myDoublyLinkedList.append(16);
  myDoublyLinkedList.prepend(1);
  myDoublyLinkedList.insert(1, 2);
  myDoublyLinkedList.remove(1);
  */