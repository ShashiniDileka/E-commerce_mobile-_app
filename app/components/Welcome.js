
import 'react-native-gesture-handler'; 
import React from 'react';
import {ImageBackground,Text,StyleSheet,View,Image,TouchableOpacity} from 'react-native';
 
export default class APP extends React.Component{
  render(){
    return(
          <View style={styles.container}>
            <ImageBackground
                source={require('./app/image/wallpaper.jpg')}
                style={{width:'100%',height:'100%'}}>
                         
                     <Text style={styles.logoText}>shopme.lk</Text> 
                     <View>
                    <View style ={styles.logocontainer}>
                        <Image style = {styles .logo} source={require ('./app/image/R.jpg')}/> 
                           </View>  
                            <PrimaryButton
                              onPress={()=> navigation.navigate('Signlogin')}
                              title="click here"
                            />
                  
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
