import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Utils/Colors";
export default function ChapterSection({ chapterList }) {
  return (
    chapterList && (
      <View
        style={{
          padding: 10,
          backgroundColor: Colors.WHITE,
          marginTop: 20,
        }}>
        <Text style={{ fontSize: 22 }}>Chapters</Text>
        {chapterList.map((item, index) => (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 4,
              borderWidth: 1,
              borderRadius: 10,
              marginTop: 10,
              marginRight: 7,
              marginLeft: 7,
              borderColor: Colors.GRAY,
            }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 16,
                padding: 15,
              }}>
              <Text style={{ fontSize: 24, color: Colors.GRAY }}>
                {index + 1}
              </Text>
              <Text style={{ fontSize: 21, color: Colors.GRAY }}>
                {item.title}
              </Text>
            </View>
            {chapterList.price === 0 ? (
              <Ionicons
                name="play-outline"
                size={24}
                color="black"
                style={{ marginRight: 9 }}
              />
            ) : (
              <Ionicons
                name="lock-closed-outline"
                size={24}
                color="black"
                style={{ marginRight: 9 }}
              />
            )}
            {/* 
            <Ionicons
              name="play-outline"
              size={24}
              color="black"
              style={{ marginRight: 9 }}
            /> */}
          </View>
        ))}
      </View>
    )
  );
}
