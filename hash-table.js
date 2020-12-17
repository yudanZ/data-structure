//Build HashTable

class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
  
    set(key, value) {
      let index = this._hash(key);
      if(!this.data[index]){
        this.data[index] = [];
      }
      this.data[index].push([key, value]);
      return this.data
    }
  
    get(key) {
      let index = this._hash(key);
      const currentBucket = this.data[index];
      //console.log(currentBucket);
      if(currentBucket.length){
        for(let i = 0; i < currentBucket.length; i++){
          if(currentBucket[i][0] === key){
            return currentBucket[i][1];
          }
        }
      }
      return undefined;
      //return this.data[index][1];
    }
  
    keys(){
      const keysArray = [];
      for(let i = 0; i < this.data.length; i++){
        if(this.data[i]){
          keysArray.push(this.data[i][0][0])
        }
      }
      return keysArray
    }
  }
  
  const myHashTable = new HashTable(50);
  myHashTable.set('grapes', 10000)
  //console.log(myHashTable.get('grapes'))
  myHashTable.set('apples', 9)
  myHashTable.set('orange', 9)
  //myHashTable.keys()
  //myHashTable.get('apples')
  //myHashTable;
  
  function firstRecurringCharacter( arr ){
    const myObject = {};
    for(let i = 0; i < arr.length; i ++ ){
      //if existe in myObject, return
      if(myObject[arr[i]]){
        return arr[i];
      }else {
        myObject[arr[i]] = true;
      }
    }
    return undefined;
  }
  
  //firstRecurringCharacter([2,5,1,2,3,5,1,2,4])
  //firstRecurringCharacter([2,1,1,2,3,5,1,2,4])
  //console.log(firstRecurringCharacter([2,3,4,5]))