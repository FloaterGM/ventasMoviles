import './styles/app.css';
import './styles/app.sass'
import React, { useState, useEffect } from "react"
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from './src/navigation/bottom-tab.js'
 
function App() {

  return(
    <NavigationContainer>
        <TabNavigator></TabNavigator>
    </NavigationContainer>
  );
}

export default App;