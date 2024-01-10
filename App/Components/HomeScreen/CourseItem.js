import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Utils/Colors";

export default function CourseItem({ item }) {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: Colors.WHITE,
        marginRight: 15,
        borderRadius: 20,
      }}>
      <Image
        source={{ uri: item?.banner?.url }}
        style={{ width: 210, height: 120, borderRadius: 15 }}
      />
      <View style={{ padding: 7 }}>
        <Text style={{ fontSize: 17 }}>{item.name}</Text>
        {/* meta data */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              marginTop: 5,
            }}>
            <Ionicons name="book-outline" size={24} color="black" />
            <Text
              style={{
                color: Colors.BLACK,
                fontWeight: "700",
              }}>
              {item?.chapters?.length} Chapters
            </Text>
          </View>
          {/* another view */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              marginTop: 5,
            }}>
            <Ionicons name="md-time-outline" size={24} color="black" />
            <Text
              style={{
                marginTop: 5,
                color: Colors.BLACK,
                fontWeight: "900",
              }}>
              {item?.time} Time
            </Text>
          </View>
        </View>
        <Text
          style={{
            marginTop: 5,
            color: Colors.PRIMARY,
            fontWeight: "900",
          }}>
          {item.price == 0 ? "Free" : item.price}
        </Text>
      </View>
    </View>
  );
}
