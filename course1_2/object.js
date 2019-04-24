// Create a new object
const o = new Object()

o.firstName = 'Tsunghan'
o.lastName = 'Hsieh'
o.isPlaying = true
o.greet = function(){
  console.log('hi')
}

// Another way to create a new object
const o2 = {}
o.firstName = 'Charles'
o.lastName = 'Whitaker'
o.isPlaying = true
o.greet = function(){
  console.log('nooo')
}

// Another way to create a new object
const o3 = {
  firstName: 'Hsiaochiao',
  lastName: 'Chien',
  isPlaying: true,
  greet: function(){
  console.log('hug!')
  },
  address: {
    house: 'No. 183',
    area: 'East Court',
  },
}
