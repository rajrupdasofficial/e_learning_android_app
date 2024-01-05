import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import loginscreen from '../../assets/images/login.jpg'
import googleicon from '../../assets/images/google.png'
import Colors from '../Utils/Colors'
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
    useWarmUpBrowser(); 
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
   
    const onPress = React.useCallback(async () => {
      try {
        const { createdSessionId, signIn, signUp, setActive } =
          await startOAuthFlow();
   
        if (createdSessionId) {
          setActive({ session: createdSessionId });
        } else {
          // Use signIn or signUp for next steps such as MFA
        }
      } catch (err) {
        console.error("OAuth error", err);
      }
    }, []);
  
  return (
    <View style={{display:'flex', alignItems:'center'}}>
      <Image source={loginscreen} style={{width:250, height:500,objectFit:'contain',marginTop:30}}/>
      <View style={{
        height:400,
        backgroundColor:Colors.PRIMARY,
        width:'100%',
        marginTop:-70,
        padding:20
      }}>
        <Text style={{textAlign:'center',color:Colors.WHITE,fontSize:30}}>
            CODE MAX
        </Text>
        <Text style={{textAlign:'center',fontSize:20,marginTop:20,color:Colors.LIGHT_PRIMARY}}>
            A new door to coding world
        </Text>
        {/* clickable button */}
        <TouchableOpacity
        onPress={onPress}
         style={{display:'flex',flexDirection:'row',gap:10,justifyContent:'center',alignItems:'center',backgroundColor:Colors.WHITE,padding:10,borderRadius:99,marginTop:20}}>
        <Image source={googleicon} style={{width:40,height:40,}}/>
        <Text style={{fontSize:20, color:Colors.PRIMARY}}>
            Login with Google
        </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}