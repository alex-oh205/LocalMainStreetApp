import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AboutScreen from './components/AboutScreen';
import HomeScreen from './components/HomeScreen';
import ContactScreen from './components/ContactScreen';
import ShopScreen from './components/ShopScreen';
import ButtonScreen from './components/ButtonScreen';
import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUp';
import ForgotPassScreen from './components/ForgotPassword';
import HelpScreen from './components/Help';
import ScanScreen from './components/ScanScreen';
import PinScreen from './components/PinScreen';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Login'>
      <Stack.Screen
       name='Buttons'
       component={ButtonScreen}
       options={{title:'Select One'}}
        />
        <Stack.Screen
       name='Scan Gift Cards'
       component={ScanScreen}
       options={{title:'Scan A Gift Card'}}
        />
      <Stack.Screen
       name='Help'
       component={HelpScreen}
       options={{title:'Help'}}
        />
      <Stack.Screen
       name='Reset Password'
       component={ForgotPassScreen}
       options={{title:'Reset Password'}}
        />
      <Stack.Screen
       name='Sign Up'
       component={SignUpScreen}
       options={{title:'Sign Up'}}
        />
       <Stack.Screen
       name='Home'
       component={HomeScreen}
       options={{title:'Home'}}
        />
          <Stack.Screen 
          name='About'
          component={AboutScreen}
          options={{title: 'About'}}
        />
          <Stack.Screen 
          name='Contact'
          component={ContactScreen}
          options={{title: 'Contact'}}
        />
          <Stack.Screen 
          name='Buy Gift Cards'
          component={ShopScreen}
          options={{title: 'Buy Gift Cards'}}
        />
          <Stack.Screen 
          name='Login'
          component={LoginScreen}
          options={{title: 'Login'}}
        />
        <Stack.Screen 
          name='Confirmation PIN'
          component={PinScreen}
          options={{title: 'Confirmation PIN'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}

export default App;

