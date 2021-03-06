/**
 * @author OpeAbidemi
 * @link https://github.com/OpeAbidemi
 * @description Built for Recruitment Press
 * @version 1.0
 *
 */

import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import Home from "./screens/Home";
import SplashScreen from "./screens/SplashScreen";
import Post from "./screens/Post";
import Browser from "./screens/Browser";
import Search from "./screens/Search";
import Bookmarks from "./screens/Bookmarks";
import About from "./screens/About";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: "white",
          },
        }}
      >
        <Stack.Screen name='SplashScreen' component={SplashScreen} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen
          name='Post'
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
          component={Post}
        />
        <Stack.Screen
          name='Search'
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
          component={Search}
        />
        <Stack.Screen
          name='Bookmarks'
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
          component={Bookmarks}
        />
        <Stack.Screen
          name='About'
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
          component={About}
        />
        <Stack.Screen
          name='Browser'
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
          component={Browser}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
