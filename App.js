import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";
// import LoginScreen from "./App/Screen/LoginScreen";
// import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { NavigationContainer } from "@react-navigation/native";
// import Constants from "expo-constants";
import TabsNavigation from "./App/Navigations/TabNavigation";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <TabsNavigation />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});
