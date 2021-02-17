

import 'react-native-gesture-handler';
import React from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from './app/components/Welcome';


const Stack=createStackNavigator();

const App =()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
           name="Welcome"
           component={Welcome}
    options={{title:"Welcome",headerShown:false}} /> 

      </Stack.Navigator>
       
    </NavigationContainer>
  )
}

