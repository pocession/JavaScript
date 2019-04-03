function map (arr, fn) {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i]
    newArr.push(fn(val))
  }
  return newArr
}


const x = [0,1,2,3]
function addOne (num) { return num = num + 1 }
console.log(map(x,addOne))
