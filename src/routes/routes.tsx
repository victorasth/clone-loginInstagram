import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './../pages/home/home'
import Login from './../pages/login/login';
import ForgotPassword from './../pages/forgotPassword/forgotpassword';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}options= {{headerShown: false}} />
     </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;