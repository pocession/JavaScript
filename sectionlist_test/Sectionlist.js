import React from 'react';
import {SectionList, Text, StyleSheet} from 'react-native';
import contacts from './contacts'


export default class Sectionlist extends React.Component {
  state = {
    contacts: contacts
  }

  renderItem = ({item}) => <Text key = {item.key}>{item}</Text>
  
  groupBy = (collection, year, name) => {
    var groups = {};
    for (var i = 0; i< collection.length; i++) {
      var groupName = collection[i][year];
      // create an object, give its properties: collection[i][year]
      // you will have an object with properties: 2015, 2016, 2017
      // values of each property will be collection[i][name]
      if (!groups[groupName]) { 
        groups[groupName] = [];
      }
      groups[groupName].push(collection[i][name])
    }
    console.log("groups: ",groups)

    // then we push contend of groups to a new object: result
    // result has properties: title and data, which has values of properties of object group and values of each property of object group
    var result = [];
    for (var group in groups) {
      result.push({title:group, data:groups[group]})
    }
    console.log("result:",result)
    return result
  }

  sortContactsByYear = () => {
    const allcontacts = this.state.contacts
    var newArray = []
    for (var i = 0; i < allcontacts.length; i++) {
      newArray.push(allcontacts[i]);
    }

    const sortedArray = newArray.sort(function(a,b) {
      return a.year - b.year
    })

    const groupArray = this.groupBy(sortedArray, 'year', 'name')
    console.log("groupArray: ",groupArray)
    
    // generate keys for each item in returned object
    const sections = Object.keys(groupArray).map(group => ({
      title:groupArray[group].title,
      data:groupArray[group].data
    }))
    console.log("sections: ",sections)

    return sections
  };

  render () {
    const allcontacts = this.state.contacts
    const sections = this.sortContactsByYear()
    console.log("Array for being rendered is: ",sections)
    return (
      
      <SectionList
      renderItem = {this.renderItem}
      renderSectionHeader = {({section: {title}}) => (
    <Text style={{fontWeight: 'bold'}}>{title}</Text>
  )}
      sections = {sections}
      />
    )
  }
}
