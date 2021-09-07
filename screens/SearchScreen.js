import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import db from '../config';
import { SearchBar, Header } from 'react-native-elements';

export default class Searchscreen extends React.Component {
  constructor(){
    super();
    this.state = {
      allStories:[],
      dataSource:[],
      search:''
    }
  }
  componentDidMount(){
    this.retrieveStories()
  }
  retrieveStories=()=>{
    try{
      var allStories = []
      var Stories = db.collection("stories").get().then((snap)=>{
        snap.forEach((doc)=>{
          allStories.push(doc.data())
        })
        this.setState({allStories})
      })
    }
    catch(error){
    console.log(error)
    }
  }

  searchFilterFunction(text){
    const newData = this.state.allStories.filter(({item})=>{
      const itemData = item.title?item.title.toUpperCase():''.toUpperCase()
      const textData = text.toUpperCase()
      return itemData.indexOf(textData)>-1
    })
    this.setState({dataSource:newData, search:text})
  }

    render() {
      return (
        <View>
          <Header backgroundColor = {'pink'} centerComponent = {{text: 'Bed Time Stories', style: {color:'green',fontSize: 20}}}/>
          <View style = {{height:20, width:'100%'}}>
            <SearchBar placeholder = "Type Here" onChangeText = {text=>this.searchFilterFunction(text)}
            onClear = {text=>this.searchFilterFunction('')} value = {this.state.search}></SearchBar>
          </View>
          <FlatList data = {this.state.search === ""? this.state.allStories:this.state.dataSource} renderItem = {({item})=>{
            <View>
              <Text>
              title: {item.title}
              </Text>
              <Text>
                Author: {item.author}
              </Text>
            </View>
          }} keyExtractor = {(item,index)=>{
            index.toString()
          }}>

          </FlatList>
        </View>
      );
    }
  }