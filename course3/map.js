var numbers = [2,4,5,6];

function myFunction () {
  return numbers.map(Math.sqrt);
}
console.log(myFunction())


function myFunction2 () {
  return numbers.map( number => number*number);
}
console.log(myFunction2())

// numbers.map(funciton()) or numbers.map(element=> function()) equals to
// list = []
// for element in numbers:
//     a = funciton(element)
//     list.append(a)
