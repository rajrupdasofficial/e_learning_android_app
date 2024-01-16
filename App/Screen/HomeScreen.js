import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../Components/HomeScreen/Header";
import Colors from "../Utils/Colors";
import CourseList from "../Components/HomeScreen/CourseList";

export default function HomeScreen({ userInfo }) {
  return (
    <ScrollView>
      <View>
        <View
          style={{ backgroundColor: Colors.PRIMARY, height: 200, padding: 15 }}>
          <Header userInfo={userInfo} />
        </View>
        <View style={{ padding: 20 }}>
          <View style={{ marginTop: -70 }}>
            <CourseList level={"Basic"} />
          </View>
          <CourseList level={"Advance"} />
        </View>
      </View>
    </ScrollView>
  );
}
