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
               <Text style={styles.logo}>Sign in</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            
            placeholder="Enter Your E-mail" 
            placeholderTextColor="white"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder=" Enter Your Password " 
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
    color: '#000000',  
    marginBottom: 5, 
    paddingVertical:100,
    fontSize:60,
    

},
inputView:{
  width:"80%",
  backgroundColor:"#8b008b",
  borderRadius:25,
  height:50,
  marginBottom:70,
  justifyContent:"center",
  padding:30,
  margin:50,
  marginBottom:20

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
  marginTop:40,
  marginBottom:5,
  marginHorizontal:100
},
loginText:{
  color:"white"
}
}); 
 