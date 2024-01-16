import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../Screen/HomeScreen";
import CourseDetailScreen from "../../Screen/CourseDetailScreen";

const Stack = createStackNavigator();

export default function HomeScreenNavigation({ userInfo }) {
  // console.log("Home Screen navigation", userInfo);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="home-screen"
        // component={HomeScreen}
        children={() => <HomeScreen userInfo={userInfo} />}
      />
      <Stack.Screen name="course-detail" component={CourseDetailScreen} />
    </Stack.Navigator>
  );
}
