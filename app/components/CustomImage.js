import React from 'react';
import {Stylesheet,Image,} from 'react-native';

export default class CustomImage extends React.Component {
    render(){
        return(
            <Image source ={this.props.imageSource}
                style={styles.banner}/>
        );
    }
}

const styles =Stylesheet.create({
    image:{
        width:'100%',
        height:200,
        alignItems:'center',
        justifyContent:'center'
    }   
});