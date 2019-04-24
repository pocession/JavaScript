const user = {
  name : 'Tsunghan',
  age : '38',
  greet : function () {
    console.log('Hello, ',this.name)
  },

  wife : {
    name : 'Hsiaochiao',
    greet : function () {
      console.log('Hello, ',this.name)
    },
  }
}

user.greet()
user.wife.greet()

const bound_greet = user.greet.bind({name : 'This is a bound object'}) // specify what name should be used for greet()
bound_greet()

user.greet.call({name : 'This is a call object'}) // call directly invoke the greet() funciton
user.greet.apply({name : 'This is a apply object'}) // apply directly invoke the greet() function

this.name = 'Tsunghan globally'

const user2 = {
  name : 'Tsunghan locally',
  greet : ()=> {console.log('Hello, ',this.name)} // => bind this.name to global object: this.name
}

// Javascript does not have block scope, it only has function scope.
// that is, in an object, if you specify this, JS actually finds this.xxx in this scope first
// but if there is no this.xxx, then JS goes out of the scope to find this.xxx
// and that's why in this case, the outpus is 'Tsunghan globally', not 'Tsunghan locally'

user2.greet()
