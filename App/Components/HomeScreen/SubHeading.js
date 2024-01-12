import { View, Text } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";

export default function SubHeading({ text, color = color }) {
  return (
    <View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          color: color,
        }}>
        {text}
      </Text>
    </View>
  );
}
