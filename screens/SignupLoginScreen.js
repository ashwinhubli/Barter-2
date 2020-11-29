import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert } from 'react-native';
import firebase from 'firebase';
import db from '../config';
import Book from '../component/book'

export default class SignupLoginScreen extends React.Component{
    constructor(){
        super();
        this.state={
           emailId: '',
           password: '' 
        }
    }
        userLogIn=(emailId,password)=>{
          firebase.auth().signInWithEmailAndPassword(emailId,password)
          .then(()=>{
             return Alert.alert('Successfully Login')     
          })
          .catch(function(error){
             var errorCode = error.errorCode
             var errorMessage = error.errorMessage
             return Alert.alert(errorMessage) 
          })  
        }
        userSignUp=(emailId,password)=>{
         firebase.auth().createUserWithEmailAndPassword(emailId,password)
         .then(()=>{
            return Alert.alert('User added successfully!')     
         })
         .catch(function(error){
            var errorCode = error.code
            var errorMessage = error.errorMessage
            return Alert.alert(errorMessage) 
         })  
       }
    render(){
        return(
            <View style={styles.container}>
                
             <View style={styles.profileContainer}>
             <Text style={styles.title}>Barter</Text>
             </View>
             <View>
              <TextInput
                style={styles.inputBox}         
                placeholder="abc@example.com"
                keyboardType='email-address'
                onChangeText={(text)=>{
                   this.setState({
                    emailId: text
                   }) 
                }}
              />
              <TextInput
               style={styles.inputBox}
               secureTextEntry={true}         
               placeholder="Enter Password"
               onChangeText={(text)=>{
                  this.setState({
                   password: text
                  }) 
               }}   
              />
              <View>
              <TouchableOpacity style={styles.button,{marginTop: 40}} onPress={()=>{this.userLogIn(this.state.emailId,this.state.password)}}>
                  <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}  onPress={()=>{this.userSignUp(this.state.emailId,this.state.password)}}>
                  <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
            </View> 
            </View>  
         </View>  
       )
    }
} 

const styles = StyleSheet.create({
 container:{
    backgroundColor:'#F8BE85'
 },
 profileContainer:{
    backgroundColor:'#G8BE85'
    },
 title :{
   fontSize:65,
   fontWeight:'300',
   marginTop: 120,
   textAlign: 'center',
    color : '#ff3d00'
 }, 
 loginBox:{
   width: 300,
   height: 140,
   borderBottomWidth: 1.5,
   borderColor : '#ff8a65',
   fontSize: 20,
   margin:10,
   paddingLeft:20
 },
  button:{
    width:300,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#GG5600", shadowColor: "#000", 
    shadowOffset: { width: 0, height: 8, },
    shadowOpacity: 0.30,
    shadowRadius: 10.32,
    elevation: 26 
   },
    buttonText:{
      color:'#ffff',
      fontWeight:'200',
      fontSize:20
     },
      buttonContainer:{
       flex:1,
       alignItems:'center'
     } 
    })  