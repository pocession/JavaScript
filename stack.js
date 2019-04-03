function addOne (num) {
console.log("addOne is running")
 return num = num + 1
}

function getNum() {
console.log("getNum is running")
  return addOne(10)
}

function getAll() {
console.log("Now getAll is running")
  console.log(getNum() + getNum())
}


getAll()
