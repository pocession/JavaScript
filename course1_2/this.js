const person = {
  name: 'Tsunghan',
  greet: function() {console.log("Hello,",this.name)}, // 'this' here indicates the object, person
}

person.greet()


this.name2 = 'global Hsiaochiao'
const person2 = {
greet2: function () { console.log("Hello, ",this.name2)}
}

const callHsiaochiao = person2.greet2
callHsiaochiao() // this will print 'Hello, undefined'.
                 // But if you run those lines on console, it will give 'Hello, global Hsiaochiao'
