import React, { Component } from "react";
//at the rate symbol - @
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';

import TransactionScreen from "../screens/Transaction"
import SearchScreen from "../screens/Search"


const Tab = createBottomTabNavigator()

export default class BottomTabNavigator extends Component {
     render() {
          return (
               < NavigationContainer>
                    <Tab.Navigator>
                         <Tab.Screen name="Transaction" component={TransactionScreen} />
                         <Tab.Screen name="Search" component={SearchScreen} />
                    </Tab.Navigator>
               </NavigationContainer>


          )
     }
}