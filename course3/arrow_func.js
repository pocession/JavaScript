// A demo for arrow function

const func1 = (function (x,y) {var x =1; var y = 2; return x*y})()
console.log("Usual codes: ",func1)

const func2 = ((x,y) => {var x = 1; var y = 3; return x*y})()
console.log("codes with fat arrow functions: ",func2)

const func3 = ((x,y) => {var x = 1; var y = 4; x*y})()
console.log("See what's going on if you writes codes with fat arrow functions but without return in braces: ",func3)
