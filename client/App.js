import './styles/app.css';
import './styles/app.sass'
import React, { useState, useEffect } from "react"
import Axios from "axios"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabNavigator } from './src/navigation/bottom-tab.js'
 
function App() {

  return(
    <NavigationContainer>
        <TabNavigator></TabNavigator>
    </NavigationContainer>
  );
}

export default App;