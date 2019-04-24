const o = {
  a : 'a',
  b : 'b',
  obj: {objInsideObj: 'a'}
}

console.log("object before mutated", o)

// change a in object o
o.a = 'new value'
console.log("object after mutated", o)

// Create a new object o2, reference to o
// Reference in JavaScript equals to point in c
// So now o and o2 both points to one Object
// Note an object is like a pointer, are nothing more than an address
// If you change o2, values of o are not changed.
// But objInsideObj is changed since it is just addresses.
const o2 = Object.assign({}, o)
console.log("We make a shallow copy of o")
console.log("o2",o2)
console.log("We now change something in o2")
console.log("Note, by doing shallow copy, any changes in objects of o2 also happens in objects of o, since o and o2 both points to the same object")

console.log("We now change b and objInsideObj of o2")
o2.b = 'new value'
o2.obj.objInsideObj = 'new value'
console.log("Now o is: ",o)
console.log("Now o2 is", o2)
console.log("Note only objInsideObj of o is changed")
