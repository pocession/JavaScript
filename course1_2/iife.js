// This is function statement, meaning a function is delared and all scripts of the function are stored in somewhere, waiting for being used

var message = 'Hello' // now message is a global variable, and can be assessed by all functions
function sayHello (){ // also equals sayHello: function() {}
  console.log(message)
}

sayHello() // if we write: return sayHello(), the script stops here. Engine will not execute sayHello2
           // if we don't declare any variable, sayHello('Hello') is also ok

// also can wrap all above in a functions
function sayHello2() {
var message2 = 'Hello inside sayHello2'

function sayHelloInside () {
  console.log(message2)
}

return sayHelloInside()
}

sayHello2()

// This is funciton expression, meaning a variable is declared. The content of this variable: function(), however, is not stored in somewhere
// so when you invoke this variable, computer only knows there is a variable, but don't know what the variable can do
// Only after you "immediately invoke" the function after the expression, the computer can know the variable is a function and run the function

var iise = function sayHello3() {
var message3 = 'Hello in iise'
  console.log(message3)
}() // () = immediately invoke the function
