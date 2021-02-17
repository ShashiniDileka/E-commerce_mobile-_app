import React from 'react';
import {Stylesheet,Text,View,Image,ScrollView} from 'react-native';

export default class Banner extends React.Component {
    render(){
        return(
            <Image source ={require('../image/Fashion.jpg')}
                style={styles.banner}/>
        );
    }
}

const styles =Stylesheet.create({
    banner:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    }   
});