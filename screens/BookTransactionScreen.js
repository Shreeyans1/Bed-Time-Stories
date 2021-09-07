import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Header} from 'react-native-elements'
import firebase from 'firebase'
import db from '../config'

export default class TransactionScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      title:'',
      author: '',
      storyText: ''
    }
  }
  submitStory = ()=>{
    console.log(db.collection("stories"))
      db.collection("stories").add({
          title: this.state.title,
          author: this.state.author,
          storyText: this.state.storyText,
          //date: firebase.firestore.FieldValue.serverTimestamp().now().toDate()
      })
      this.setState({
          title: '',
          author: '',
          storyText: ''
      })
  }

    render() {
      return (
        <KeyboardAvoidingView style={{ flex: 1, backgroundColor: "white"}} behavior = "padding" enabled>
          <Header backgroundColor = {'pink'} centerComponent = {{text:'storyHub',style:{color:'black',fontSize:30}}}></Header>
          <TextInput placeholder = "Story Title" onChangeText = {(text)=>{this.setState({title:text})}} value = {this.state.title} style = {styles.title} placeHolderTextColor = 'black'></TextInput>
          <TextInput placeholder = "Author" onChangeText = {(text)=>{this.setState({author:text})}} value = {this.state.author} style = {styles.author} placeHolderTextColor = 'black'></TextInput>
          <TextInput placeholder = "Write Your Story" onChangeText = {(text)=>{this.setState({storyText:text})}} value = {this.state.storyText} style = {styles.storyText} multiline = {true} placeHolderTextColor = 'black'></TextInput>
          <TouchableOpacity style = {styles.submitButton} onPress = {this.submitStory}><Text style = {styles.buttonText}>Submit</Text></TouchableOpacity>
          
        </KeyboardAvoidingView>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    title:{
        height: 40,
        borderWidth: 2,
        marginTop: 40,
        margin: 10,
        color:'black',
        padding: 6,
  
    },
    author: {
        height: 40,
        borderWidth: 2,
        margin: 10,
         padding: 6,
    },
    storyText: {
        height: 250,
        borderWidth: 2,
        margin: 10, 
        padding: 6,
    },
    submitButton:{
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'pink',
        width: 80,
        height: 40,color:'black',
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        color:'black',
    }
  });