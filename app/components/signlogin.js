

import React from 'react';
import {ImageBackground,Text,StyleSheet,View,Image,TouchableOpacity,} from 'react-native';
import { color } from 'react-native-reanimated';
 
export default class APP extends React.Component{
  render(){
    return(
          <View style={styles.container}>
            <ImageBackground
                source={require('./image/wallpaper.jpg')}
                style={{width:'100%',height:'100%'}}>
                         
                     <Text style={styles.logoText}>shopme.lk</Text> 
                    <View>
      <View style={styles.space}title='clickBtn1,clickBtn2'/>
                         
                         <View style ={styles.logocontainer}>
                        <Image style = {styles .logo} source={require ('./image/R.jpg')}/> 
                </View>  
                     
                        <View>
                    
                            <TouchableOpacity style={styles.clickBtn2}>
                              <Text style={styles.loginText}>Sign up</Text>
                          </TouchableOpacity>
                            
                           
                            <TouchableOpacity style={styles.clickBtn2}>
                              <Text style={styles.loginText}>Sign in</Text>
                          </TouchableOpacity>

                         </View>
                </View>
                 

        </ImageBackground>
      </View>
    );
  }
};

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
   // paddingHorizontal:70,
    //marginBottom:90,
   // marginTop: 80,
    justifyContent:'center',
    alignItems:'center',
    width:null,
    height:null,
    //aspectRatio:1.5,
    //resizeMode:'contain',
    paddingVertical:2,
  },


  clickBtn1:
  {
    width:"60%",
    borderRadius:10,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    margin:82,
    backgroundColor:"#8b008b",

  },

  clickBtn2:
  {
    width:"60%",
    borderRadius:80,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    margin:82,
    backgroundColor:"#8b008b",
  
  },


    setfontSize:{
    
     fontSize:10,
     fontWeight:'bold',
          
    },

    setfontSize:{
    
    fontSize:50,
    fontWeight:'bold',
             
    },

    setColour:{

     color:'#ffffff',

    },




});  
