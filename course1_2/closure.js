function makeFunctionArray() {
  const arr = []

  for (var i = 0; i < 5; i++) // i cannot leave this scope only when the loop ends, thus, i is always 5 outside this scope
  arr.push(function () { console.log(i) }) // Push the function makeFunctionArray to the array
                                           // Then makeFunctionArray will read i

  return arr
}

functionarr = makeFunctionArray()

functionarr[0]()
