import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Utils/Colors";

export default function OptionItem({ icon, value }) {
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
          marginTop: 5,
        }}>
        <Ionicons name={icon} size={24} color="black" />
        <Text
          style={{
            color: Colors.BLACK,
            fontWeight: "700",
          }}>
          {value}
        </Text>
      </View>
    </View>
  );
}
