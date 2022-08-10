import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import General from "./screens/General";
import Business from "./screens/Business";
import Health from "./screens/Health";
import Sports from "./screens/Sports";
import Tech from "./screens/Tech";

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="General"
        component={General}
        options={{
          tabBarIcon: (props) => (
            <Icon type="feather" name="home" color={props.color} />
          ),
        }}
      />
      <Tab.Screen
        name="Business"
        component={Business}
        options={{
          tabBarIcon: (props) => (
            <Icon type="feather" name="dollar-sign" color={props.color} />
          ),
        }}
      />
      <Tab.Screen
        name="Health"
        component={Health}
        options={{
          tabBarIcon: (props) => (
            <Icon type="feather" name="heart" color={props.color} />
          ),
        }}
      />
      <Tab.Screen
        name="Sports"
        component={Sports}
        options={{
          tabBarIcon: (props) => (
            <Icon
              type="ionicon"
              name="tennisball-outline"
              color={props.color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Tech"
        component={Tech}
        options={{
          tabBarIcon: (props) => (
            <Icon
              type="ionicon"
              name="hardware-chip-outline"
              color={props.color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;
