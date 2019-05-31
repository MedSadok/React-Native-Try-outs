import React, { Component} from 'react';
import {Text,
        TextInput,
        StyleSheet,
        View,
        AsyncStorage,
        TouchableOpacity} from 'react-native';
import { createStackNavigator } from 'react-navigation';





class Login extends Component {

  constructor(props){
    super(props);
    this.state= {
      Username: '',
      Password: '',
      nameValidate: true,
      passwordValidate: true
    }
  }

  // loadInitialState = async () => {
  //   let value = await AsyncStorage.getItem('user');
  //   if ( value !== null ){
  //     this.props.navigation.navigate('Profile');
  //   }
  // }

  Validate(text, type){
    var alph=/^[a-zA-Z]+$/;
    var mail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var password=/^[a-zA-Z]\w{3,14}$/;
    if(type=='Username'){
      if(alph.test(text) && mail.test(text)){
        this.setState({
          nameValidate:true,
        })
      }
      else{
        this.setState({
          nameValidate:false,
        })
      }
    }
    else if (type==='password') {
      if(password.test(text)){
        this.setState({
          passwordValidate: true,
        })
      }
      else {
        this.setState({
          passwordValidate: false,
        })
      }
    }
  }

  blurTextInput(){
   this.refs.myInput.blur()
  }

  render(){
    return(
        <View style = { styles.container }>
          <Text style = { styles.header }>- LOGIN -</Text>
          <TextInput styles={[ styles.textInput, !this.state.nameValidate? styles.error:null]}
                     label="Username"
                     placeholder="Email"
                     autoCapitalize="none"
                     ref="email_input"
                     onchangeText={(text)=>this.Validate(text,'Username')}
                     onSubmitEditing={() => this.refs['email_input'].blur()}/>


          <TextInput styles={[ styles.textInput, !this.state.nameValidate? styles.error:null]}
                     label="Password"
                     placeholder="Password"
                     autoCapitalize="none"
                     ref="password_input"
                     onchangeText={(text)=>this.Validate(text,'Password')}
                     onSubmitEditing={() => this.refs['password_input'].blur()}/>


          <TouchableOpacity onPress = {() => this.props.navigation.navigate('Profile')} >
              <Text style = { styles.btn}> Log In </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style ={ styles.text }>Not a member ? SignUp Now </Text>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles= StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2896d3',
    paddingLeft: 40,
    paddingRight:40
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 60,
    color: '#fff'
  },
  text:{
    fontSize: 16,
    fontWeight:'bold'
  },
  textInput:{
    BorderColor:'#000',
  },
  error:{
    backgroundColor: '#fff',
    BorderColor:'#FF0000'
  }
});


export default Login;
