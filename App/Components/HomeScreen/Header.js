import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import Colors from "../../Utils/Colors";
import Coin from "../../../assets/images/coin.png";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  const { isLoaded, isSignedin, user } = useUser();
  return (
    isLoaded && (
      <View>
        <View style={[{ justifyContent: "space-between" }, styles.rowStyle]}>
          <View style={styles.rowStyle}>
            <Image
              source={{ uri: user?.imageUrl }}
              style={{ width: 50, height: 50, borderRadius: 99 }}
            />
            <View>
              <Text style={{ color: Colors.WHITE }}>Welcome,</Text>
              <Text style={styles.mainText}>{user?.fullName}</Text>
            </View>
          </View>
          <View style={styles.rowStyle}>
            <Image
              source={Coin}
              style={{ width: 35, height: 35, marginTop: 7, borderRadius: 99 }}
            />
            <Text style={styles.mainText}>3500</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: Colors.WHITE,
            paddingLeft: 20,
            paddingRight: 5,
            display: "flex",
            flexDirection: "row",
            marginTop: 30,
            justifyContent: "space-between",
            borderRadius: 99,
          }}>
          <TextInput placeholder="Search Courses" style={{ fontSize: 20 }} />
          <Ionicons name="search" size={30} color={Colors.PRIMARY} />
        </View>
      </View>
    )
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
  },
});
