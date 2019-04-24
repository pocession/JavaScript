function People(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eye = eye;
}

var myWife = new People("Hsiaochiao", "Chien", 32, "Red") // create a People object
console.log("My wife is ", myWife.firstName, myWife.lastName, ". Now  she is", myWife.age, "years old.")
console.log("Her eye color is", myWife.eye)

// in React, constructor() does basically the same things
// super() allow you to use 'this'
// in React, codes are like this:
// const Something extends React.Component {
//   constructor () {
//    super()
//   } 
// }
