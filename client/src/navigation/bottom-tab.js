import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import VendedoresScreen from "../screens/VendedoresScreen";
import VentasScreen from "../screens/VentasScreen";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Vendedores" component={VendedoresScreen} />
      <Tab.Screen name="Ventas" component={VentasScreen} />
    </Tab.Navigator>
  );
}