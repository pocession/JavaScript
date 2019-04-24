function printOne () {
  console.log('one')
}

function printTwo () {
  console.log('two')
}

function printThree () {
  console.log('three')
}


setTimeout(printOne, 1000) // will be the last printed (after 1000 ms)
setTimeout(printTwo, 0) // will be the second printed
printThree() // will be the first printed
