function makeHelloFunciton(){
  const message = 'Hello'

  function sayHello(){
    console.log(message)
  }

  return sayHello
}

const sayHello = makeHelloFunciton() //sayHello is declared, but remained uninitialised

// console.log(message) is an error
sayHello() // sayHello is declared, initialised as undefined and hoisted
           // if this line is removed, message cannot be printed
