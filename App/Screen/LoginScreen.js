import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import loginscreen from "../../assets/images/book.jpg";
import googleicon from "../../assets/images/google.png";
import { useEffect, useState } from "react";
import Colors from "../Utils/Colors";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";

export default function LoginScreen() {
  const [error, setError] = useState();
  const [userInfo, setUserInfo] = useState();
  const signin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const user = await GoogleSignin.signIn();
      setUserInfo(user);
      setError();
    } catch (e) {
      setError(e);
    }
  };
  return (
    <View style={{ display: "flex", alignItems: "center" }}>
      <Image
        source={loginscreen}
        style={{ width: 950, height: 350, objectFit: "contain", marginTop: 5 }}
      />
      <View
        style={{
          height: 400,
          backgroundColor: Colors.PRIMARY,
          width: "100%",
          marginTop: -90,
          padding: 20,
        }}>
        <Text
          style={{ textAlign: "center", color: Colors.WHITE, fontSize: 30 }}>
          CODE MAX
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            marginTop: 10,
            color: Colors.LIGHT_PRIMARY,
          }}>
          A new door to coding world
        </Text>
        {/* clickable button */}
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Standard}
          color={GoogleSigninButton.Color.Dark}
          onPress={signin}
        />
        {/* <TouchableOpacity
          onPress={onPress}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Colors.WHITE,
            padding: 10,
            borderRadius: 99,
            marginTop: 27,
          }}>
          <Image source={googleicon} style={{ width: 40, height: 40 }} />
          <Text style={{ fontSize: 20, color: Colors.PRIMARY }}>
            Login with Google
          </Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
}
