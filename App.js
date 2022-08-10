import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeTabs from "./HomeTabs";
import SingleNews from "./screens/SingleNews";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeTabs}
          options={{
            title: "Simon Newsapp",
          }}
        />
        <Stack.Screen name="Post" component={SingleNews} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
