// Set should maintain a list of unique values and should support add, delete,
// and inclusion
// It also should have the ability to get its size

class Set {
  constructor(arr) {
    this.arr = arr
  }

  add(val) {
    if (!this.has(val)) this.arr.push(val)
  }

  delete(val) {
    this.arr = this.arr.filter(x => x !== val)
  }

  has(val) {
    return this.arr.includes(val) // return a boolean
  }

  get size() {
    return this.arr.length
  }
}

const s = new Set([1,2,3,4,5])
console.log(s)

s.add(1) // add a value which is already in arr
s.add(7)
console.log("We're trying to add [1,7]. Only 7 will be added.")
console.log(s)

s.delete(2) // delete a value in set
s.delete(9)

console.log("We're trying to delete [2,9]. Only 2 will be deleted.")
console.log(s)

console.log("Now we have " + s.size + " elements in s")
console.log("Do we have 5 in s? ",s.has(5))
