import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Button,
  Image,
} from "react-native";
import loginscreen from "./assets/images/book.jpg";
import Colors from "./App/Utils/Colors";
import { NavigationContainer } from "@react-navigation/native";
// import Constants from "expo-constants";
import TabsNavigation from "./App/Navigations/TabNavigation";
import { useEffect, useState } from "react";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import LoginScreen from "./App/Screen/LoginScreen";

export default function App() {
  const [error, setError] = useState();
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "274745835394-cm7f2iui82l4fk1cmtlcecofd501pq20.apps.googleusercontent.com",
    });
  });

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
  const logout = () => {
    setUserInfo();
    GoogleSignin.revokeAccess();
    GoogleSignin.signOut();
  };
  return (
    <View style={styles.container}>
      {userInfo ? (
        <NavigationContainer>
          <TabsNavigation userInfo={{ userInfo }} />
        </NavigationContainer>
      ) : (
        <View style={{ display: "flex", alignItems: "center" }}>
          <Image
            source={loginscreen}
            style={{
              width: 950,
              height: 350,
              objectFit: "contain",
              marginTop: 5,
            }}
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
              style={{
                textAlign: "center",
                color: Colors.WHITE,
                fontSize: 30,
              }}>
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
            <GoogleSigninButton
              size={GoogleSigninButton.Size.Standard}
              color={GoogleSigninButton.Color.Dark}
              onPress={signin}
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: Colors.WHITE,
                padding: 10,
                borderRadius: 99,
                marginTop: 37,
                marginLeft: 26,
              }}
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});
