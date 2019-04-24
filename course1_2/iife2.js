const counter = function () {
  let count = 0

  return { // This is an object
    inc: function() { count = count + 1 }, // follow this format: A : key,
    get: function() { console.log(count) },
  }
}();

counter.inc()
counter.get()
counter.inc()
counter.get()
