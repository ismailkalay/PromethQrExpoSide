import React, { Component } from 'react';
import { View, Pressable, Text, TextInput, TouchableOpacity, Button} from 'react-native';
import styles from './style';
import Feather from 'react-native-vector-icons/Feather';
import axios from "axios";
import qs from "qs";

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password : '',
      checkSignin : false,
      check_textInputChange : false,
      secureTextEntry : true,
    };
  }

  onSubmitFormHandler = async (event) => {
    var Email = this.state.email;
    var Password = this.state.password;
    //alert(Email+Password)
    if ((Email.length==0) || (Password.length==0)){
      alert("Required Field Is Missing!!!");
    }else{
      var data = qs.stringify({
        'name': Email,
        'desc': Password,
        'quantity': '10'
      });
      var config = {
        url: 'http://192.168.1.218/Promethqr/public/api/itemuser',
        //url: 'http://ismailkalay.com/Promethqr/public/api/item',
        method: 'post',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data
      };
      let self = this; //  declared var 

      axios(config)
      .then(function (response) {
        
        console.log(JSON.stringify(response.data));
        if(response.data.message =="kullanicivedesc var"){
          alert(JSON.stringify(response.data));
          self.props.navigation.navigate("PromethQr");
        }
        else if(response.data.message =="kullaniciveyadesc yanlis"){
          alert(JSON.stringify(response.data));
        }

      })
      .catch(function (error) {
        console.log(error);
      });

    



    }

  };

  InsertRecord=()=>{
    var Email = this.state.email;
    var Password = this.state.password;
    alert(Email+Password)
    if ((Email.length==0) || (Password.length==0)){
      alert("Required Field Is Missing!!!");
    }else{
      var APIURL = "http://www.ismailkalay.com/qrbackend/login.php";
    }
  }

  updateSecureTextEntry(){
    this.setState({
      ...this.state,
      secureTextEntry: !this.state.secureTextEntry
    });
  }

  render() {
    return (
      <View style={styles.viewStyle}>
          <View style={styles.action}>
            <TextInput
              placeholder="Kullanıcı adı"
              placeholderTextColor="#F19784"
              style={styles.textInput}
              onChangeText={email=>this.setState({email})}
              />
          </View>

          <View style={styles.action}>
            <TextInput
              placeholder="Şifre"
              placeholderTextColor="#F19784"
              style={styles.textInput}
              secureTextEntry={this.state.secureTextEntry ? true : false}
              onChangeText={password=>this.setState({password})}
              />
                <TouchableOpacity
                  onPress={this.updateSecureTextEntry.bind(this)}>

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


            {/* Button */}

                <View style={styles.loginButtonSection}>    
                  <Pressable
                    style={styles.loginButton} 
                    onPress={()=>{
                      this.onSubmitFormHandler()
                      //this.InsertRecord()
                    }}
                    >
                      <Text style={styles.text}>Giriş</Text>
                  </Pressable>
                </View>

                <View style={styles.loginButtonSection}>
                  <Pressable
                    style={styles.loginButton} 
                    onPress={()=>{
                      // this.InsertRecord()
                      this.props.navigation.navigate("KullanıcıKaydı");
                    }}
                  >
                  <Text style={styles.text}>Yeni Kayıt</Text>
                  </Pressable>
                </View>
      </View>
      
    );
  }
}