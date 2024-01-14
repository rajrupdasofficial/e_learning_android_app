import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Colors from "../Utils/Colors";

export default function Profile({ userInfo }) {
  return (
    <View
      style={{
        backgroundColor: Colors.LIGHT_PRIMARY,
        height: 200,
        padding: 15,
      }}>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          marginLeft: 15,
          marginTop: 40,
        }}>
        <View>
          <Text
            style={{
              fontSize: 27,
              fontWeight: "bold",
            }}>
            Profile
          </Text>
          <View style={styles.rowStyle}>
            <Image
              source={{ uri: userInfo.userInfo?.user?.photo }}
              style={{ width: 50, height: 50, borderRadius: 99 }}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: "400",
              }}>
              {userInfo.userInfo?.user?.name}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainText: {
    color: Colors.WHITE,
    fontSize: 15,
  },
  rowStyle: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginTop: 24,
  },
});
