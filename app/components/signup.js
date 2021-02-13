import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,ImageBackground } from 'react-native';

export default class App extends React.Component {
  state={
    email:"",
    password:""
  }
  render(){
    return (
       
           <View style={styles.container}>
      <ImageBackground
              source={require('./src/image/wallpaper.jpg')}
              style={{width:'100%',height:'100%'}}>
               <Text style={styles.logo}>Sign up</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            
            placeholder="Enter Your Name" 
            placeholderTextColor="white"
            onChangeText={text => this.setState({name:text})}/>
        </View>
        <View style={styles.emailnew} >
          <TextInput  
            style={styles.inputText}
            placeholder=" Enter Your E-mail" 
            placeholderTextColor="white"
            onChangeText={text => this.setState({name:text})}/>
            </View>

            <View style={styles.passswordnew} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder=" Enter Your Password " 
            placeholderTextColor="white"
            onChangeText={text => this.setState({password:text})}/>
            </View>

            <View style={styles.conformpassword} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder=" Conform Password " 
            placeholderTextColor="white"
            onChangeText={text => this.setState({password:text})}/>
            </View>

            
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        




      </ImageBackground>

       </View>
  );
}
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#003f5c',
  alignItems: 'center',
  justifyContent: 'center',
  
},
logo:{
  justifyContent:'center',
    textAlign: 'center',  
    color: '#8b008b',  
    marginTop: 1, 
    paddingVertical:20,
    fontSize:50,
    

},
inputView:{
  width:"80%",
  backgroundColor:"#8b008b",
  borderRadius:50,
  height:50,
  marginTop:5,
  justifyContent:"center",
  padding:30,
  margin:50,
  paddingVertical:20,
 

},

emailnew:{
  width:"80%",
  backgroundColor:"#8b008b",
  borderRadius:50,
  height:50,
  marginBottom:10,
  justifyContent:"center",
  padding:30,
  margin:50,
  marginTop:5,
  paddingVertical:20,
 


},

passswordnew:{
  width:"80%",
  backgroundColor:"#8b008b",
  borderRadius:25,
  height:50,
  
  justifyContent:"center",
  padding:30,
  margin:50,
  marginBottom:5,
  paddingVertical:20,

},

conformpassword:{
  width:"80%",
  backgroundColor:"#8b008b",
  borderRadius:25,
  height:50,
  marginBottom:20,
  justifyContent:"center",
  padding:30,
  margin:50,
  marginBottom:20,
  paddingVertical:20,

},
inputText:{
  height:100,
  color:"white"
},
forgot:{
  color:"#8b008b",
  fontSize:15,
  marginHorizontal:65
  
},
loginBtn:{
  width:"50%",
  backgroundColor:"#8b008b",
  borderRadius:25,
  height:50,
  alignItems:"center",
  justifyContent:"center",
  marginTop:110,
  //marginBottom:10,
  marginHorizontal:100
},
loginText:{
  color:"white",
  justifyContent:"center"
}
}); 
 