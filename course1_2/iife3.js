
function printnum () {
  for (var i = 0; i < 5; i++);
  setTimeout(function () {console.log(i)},6000);
}

printnum()
console.log("The first function will print only 5 after waiting for 1 sec")

// Show how to pass an variable to a function, and iterate it
console.log("The second function will print 0-4 at every 1 sec")
function printnum2() {
  for (var i = 0; i < 5; i++) (function (x){
    setTimeout(function () { console.log(x)},1000*x)
  })(i)
}

printnum2()

console.log("The third function will print 0-4 at every 1 sec")

// Show how to pass an variable to a function, and iterate it by using let
console.log("The second function will print 0-4 at every 1 sec")
function printnum3() {
  for (let i = 0; i < 5; i++) { // use let here
    setTimeout(function () { console.log(i)},1000*i)
  }
}
printnum3()
