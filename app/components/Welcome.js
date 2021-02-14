
import React from 'react';
import {ImageBackground,Text,StyleSheet,View,Image,TouchableOpacity,Button} from 'react-native';
import { NavigationContainer, StackActions } from  '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Welcome =({navigation})=>{
  return(
      <View style={styles.container}>
        <ImageBackground>
            source={require('./image/wallpaper.jpg')}
            style={{width:'100%',height:'100%'}}
                     
                <Text style={styles.logoText}>shopme.lk</Text> 
                <View>
                <View style ={styles.logocontainer}>
                    <Image style = {styles .logo} source={require ('./image/R.jpg')}/> 
                       </View>  
                       
                          <Text style={styles.loginText}>Click Here</Text>
                              <Button
                               title =" click here" 
                               onPress={()=> navigation.navigate('signlogin')}
                                />
                             
                        </View> 
             

        </ImageBackground>
      </View>
);
  
}
const styles = StyleSheet.create({
  container:{
    flex:1 
  },
   
  logoText:{
     
    justifyContent:'center',
    textAlign: 'center',  
    color: '#000000',  
    marginBottom: 5, 
    paddingVertical:100,
    fontSize:60,
  },

  logocontainer:{
   
    justifyContent:'center',
    alignItems:'center',
    width:null,
    height:null,
    paddingVertical:2,
  },


  clickBtn:
  {
    width:"60%",
    borderRadius:30,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    margin:80,
    backgroundColor:"#8b008b",
    fontWeight: 'bold',
  }



});  

export default Welcome;


