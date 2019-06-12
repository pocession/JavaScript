var msg = "hello Hsiaochiao!";
var sayHi = function () {
  console.log("sayHi: ",msg);
};

sayHi()
// We assign a variable sayHi, with a type of function
// then invoke function sayHi (sayHi())

var sayHi2 = function hello () {
  console.log("sayHi2: ",msg);
}

sayHi2();
// We assign a variable sayHi2, with a type of function
// sayhi2() can work
// but hello() can't work
// hello can only be used within the function expression {}, for the function calls it recursively

! function () {
  console.log("iife: ",msg)
}();
// Usually when javascript sees 'function', it tries to find the definition of this funciton
// But now, when javascript sees 'function', it doesn't see any definition (e.g. var x = function ())
// javascript now only sees the expression '{}'. Now it will stop to find definition and you will get a syntax error without '!'
// '!' operator enforces javascript to treat whatever that's coming after '!' as an expression without taking care its definiton
// this function is invoked immediately after it appears
// and also dies when it is invoked

void function () {
  console.log("iife2: ",msg)
}();
// void also acts like '!'
// The above examples do not return any values, if you want to return a value with an IIFE function
// use the following codes

(function() {
    console.log("iife3: ",msg);
}());

(function() {
  console.log("iife4: ",msg)
})();
// two forms of IIFE


(function iife5 (){
    console.log("iife5: ",msg);
}());

(function iife6(){
  console.log("iife6: ",msg)
})();

var result = (function iife7 () {
  return "iife7: "
})();

console.log(result, msg);
// an IIFE with a return value

(function iife7 (msg, times) {
  for (var i = 0; i < times; i++) {
    console.log(msg, i);
  }
})("iife7: ", 7);
// an IIFE takes paremeters and runs
