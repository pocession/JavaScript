//build map function by yourself

function map (arr, fn) {
  const newArr = []
  for (i = 0; i < arr.length; i++ ) {
    let val = arr[i]
    newArr.push(fn(val))
  }
  return newArr
}

function addOne(num) { return num = num + 1}

const x = [0,1,2,3]

console.log(map(x, addOne))
