import React, { Component, useState } from 'react';
import { View, Pressable, Text, ScrollView, Platform, TextInput, Button, TouchableOpacity } from 'react-native';
import styles from './style';
import Feather from 'react-native-vector-icons/Feather';
import axios from "axios";
import qs from "qs";

export default class Signup extends Component {

  

  constructor(props) {
    super(props);
    this.state = { 
      email : '',
      password : '',
      confirmPw : '',
      check_textInputChange : false,
      secureTextEntry : true,
      confirmSecureTextEntry : true
    };
  }
  onSubmitFormHandler = async (event) => {
    var data = qs.stringify({
      'name': 'halukbuyuk',
      'desc': '12341234',
      'quantity': '10'
    });
    var config = {
      //url: 'http://192.168.1.218/Promethqr/public/api/item',
      url: 'http://ismailkalay.com/Promethqr/public/api/item',
      withCredentials: true,
      method: 'post',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
    };
    await axios(config)
    .then(function (response) {
      alert(JSON.stringify(response.data));
      console.log(JSON.stringify(response.data)); 
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  InsertRecord=()=>{
    var Email = this.state.email;
    var Password = this.state.password;
    var ConfirmPw = this.state.confirmPw;
    var checkEmail = RegExp(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i);
  
    if ((Email.length==0) || (Password.length==0) || (ConfirmPw.length==0)){
      alert("Required Field Is Missing!!!");
    }else if (!(checkEmail).test(Email)){
      alert("invalid email!!!");
    }
    // Password validations
    else if (Password.length<3){
      alert("Minimum 3 characters required!!!");
    }//else if (!((/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/).test(Password))){
     // alert("Use atleast 01 special character!!!");
    //}
    else if (((/[ ]/).test(Password))){
      alert("Don't include space in password!!!");
    }else if(Password !== ConfirmPw){
      alert("Password doesnot match!!!");
    }
    
    else{
      var InsertAPIURL = "http://www.ismailkalay.com/qrbackend/SignUp.php";   //API to render signup

      var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };
      
      var Data ={
        Email: Email,
        Password: Password
      };



    
      //console.log(Email);

  
      //FETCH func ------------------------------------
      /*
      fetch(InsertAPIURL,{
          method:'POST',
          mode: 'no-cors',
          headers:headers,
          data:{Email: Email,Password: Password}
          
          //convert data to JSON
      })
      .then((response)=> response) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
      .then((response)=>{
        console.log(response);
        //console.log(response);
        //alert(JSON.stringify({data: [{Email: Email},{Password: Password}]}));
        alert(JSON.stringify(response));       // If data is in JSON => Display alert msg
        //alert(response[0].Message);
        //alert(JSON.stringify((Data)));
        this.props.navigation.navigate("SignInScreen"); //Navigate to next screen if authentications are valid
      })
      .catch((error)=>{
          alert("Error Occured" + error);
      });
      
        */


    }

  }
  
  updateSecureTextEntry(){
      this.setState({
          ...this.state,
          secureTextEntry: !this.state.secureTextEntry
      });
  }

  updateConfirmSecureTextEntry(){
      this.setState({
          ...this.state,
          confirmSecureTextEntry: !this.state.confirmSecureTextEntry
      });
  }

  render() {
      return (
        <View style={styles.viewStyle}>
          <View style={styles.action}>
          <TextInput
                  placeholder="E-mail Giriniz..."
                  placeholderTextColor="#F19784"
                  style={styles.textInput}
                  onChangeText={email=>this.setState({email})}
                  />
          </View>


          <View style={styles.action}>
              <TextInput
                  placeholder="Şifre..."
                  placeholderTextColor="#F19784"
                  secureTextEntry={this.state.secureTextEntry ? true : false}
                  style={styles.textInput}
                  onChangeText={password=>this.setState({password})}
                  />
                  <TouchableOpacity
                    onPress={this.updateSecureTextEntry.bind(this)}    
                    >
                    {this.state.secureTextEntry ?
                        <Feather
                        name="eye-off"
                        color="grey"
                        size={20}
                        />
                    :
                        <Feather
                        name="eye"
                        color="black"
                        size={20}
                        />
                    }
                  </TouchableOpacity> 
            </View> 

            <View style={styles.action}>
              <TextInput
                  placeholder="Şifre Tekrar..."
                  placeholderTextColor="#F19784"
                  style={styles.textInput}
                  onChangeText={confirmPw=>this.setState({confirmPw})}
                  secureTextEntry={this.state.confirmSecureTextEntry ? true : false}
              /> 
              <TouchableOpacity
                    onPress={this.updateConfirmSecureTextEntry.bind(this)}    
                    >
                    {this.state.confirmSecureTextEntry ?
                        <Feather
                        name="eye-off"
                        color="grey"
                        size={20}
                        />
                    :
                        <Feather
                        name="eye"
                        color="black" 
                        size={20}
                        />
                    }
                  </TouchableOpacity>
            </View> 

            
            
            <View style={styles.loginButtonSection}>    
            <Pressable
              style={styles.loginButton} 
              onPress={()=>{
                //this.InsertRecord()
                this.onSubmitFormHandler()
              }}
              >
                <Text style={styles.text}>Kayıt Ol</Text>
            </Pressable>
            </View>



          </View>

          




      );
 }
}