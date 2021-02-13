
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
                           <TouchableOpacity style={styles.clickBtn}>
                              <Text style={styles.loginText}>Click Here</Text>
                                 </TouchableOpacity>
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




