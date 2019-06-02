const list = [{year:2017, name:'Charles Whitaker'}, {year:2017, name:'Hsiao Chiao'}, {year:2015, name:'Tsunghan Hsieh'}, {year:2016, name:'Tsungyen Huang'}, {year:2015, name:'Daiki Sasaki'}, {year:2015, name:'Shinichi Koizumi'}, {year:2015, name:'Shukla Sakar'}, {year:2016, name:'Ke Wang'}]

const addKeyToContact = (contact, key) => ({
  key: key,
  ...contact,
})

export default Array.from(list).map(addKeyToContact)