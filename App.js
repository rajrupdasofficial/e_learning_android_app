import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,SafeAreaView,Text } from 'react-native';
import LoginScreen from './App/Screen/LoginScreen';
import { ClerkProvider,SignedIn, SignedOut } from "@clerk/clerk-expo";
import Constants from "expo-constants"


export default function App() {
  return (
    <ClerkProvider publishableKey={Constants.expoConfig.extra.clerkPublishableKey}>
    <View style={styles.container}>
      <SignedIn>
          <Text>You are Signed in</Text>
        </SignedIn>
        <SignedOut>
        <LoginScreen/>
        </SignedOut>
    </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
