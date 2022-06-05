import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/Splash';
import Home from '../screens/Home';
import Map from '../screens/Map';
import Camera from '../screens/Camera';
import HomeTabs from './HomeTabs';
import Task from '../screens/Task';


const RootStack = createStackNavigator();

export default function RootStackNav(){
  return (
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#0080ff'
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: 'bold'
            }
          }}
        >
          <RootStack.Screen
            name="Splash"
            component={Splash}
            options={{
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name="Home"
            component={Home}
          />
          <RootStack.Screen
            name="Map"
            component={Map}
          />
          <RootStack.Screen
            name="Camera"
            component={Camera}
          />
          <RootStack.Screen
            name="Task"
            component={Task}
          />
           <RootStack.Screen
            name="My Tasks"
            component={HomeTabs}
          />
        </RootStack.Navigator>
      </NavigationContainer>
  )
}