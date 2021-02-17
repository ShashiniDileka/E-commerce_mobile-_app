import React from 'react';
import {StyleSheet,Text,View,ScrollView} from 'react-native';
 

import Banner from './Banner';
import title from './Topics';

export default class Home extends React.Component{
    render(){
        return(
            <ScrollView style= {StyleSheet.container}>
               
                <Banner/>
                <Topics/>

            </ScrollView>
        );
    }
}

const styles =Stylesheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    }   
});