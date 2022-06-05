import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Done from '../screens/Done';
import Todo from '../screens/Todo';

const Tab = createBottomTabNavigator();


export default function HomeTabs(){
    return(
      <Tab.Navigator
      screenOptions={
        ({route})=>({
          tabBarIcon:({focused,size,color})=>{
            let iconName;
            if(route.name ==='Todo'){
              iconName ="clipboard-list";
              size=focused?25:20
            }else if(route.name ==='Done'){
              iconName ="clipboard-check";
              size=focused?25:20
            }
            return(
              <FontAwesome5 
              name={iconName}
              size={size}
              color={color}
              />
            )
          }
        })
      }
      tabBarOptions={{
        activeTintColor:"#0080ff",
        inactiveTintColor:"#777777",
        labelStyle:{fontSize:15,fontWeight:'bold'}
      }}
      >
        <Tab.Screen name='Todo' component={Todo}/>
        <Tab.Screen name='Done' component={Done}  /> 
         </Tab.Navigator>
    )
  }