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
