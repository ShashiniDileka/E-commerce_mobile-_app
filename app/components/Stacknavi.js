import Welcome from './app/components/Welcome';
import signin from './components/Signin';

const Stack =createStackNavigator();

export default class App extends React.Component{
    render(){
      return(
        <NavigationContainer>
           
            <Stack.Navigator>
                  
               <Stack.Screen name ='welcome'component ={welcome}/>
               <Stack.Screen name ='Signlogin'component ={Signlogin} />
          
          
          </Stack.Navigator>
      </NavigationContainer>
      
      );
    }
  };
  