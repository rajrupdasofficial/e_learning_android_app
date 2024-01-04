import { View, Text, Image } from 'react-native'
import React from 'react'
import loginscreen from '../../assets/images/login.jpg'
import googleicon from '../../assets/images/google.png'
import Colors from '../Utils/Colors'
export default function LoginScreen() {
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
        <Text style={{textAlign:'center',color:Colors.WHITE,fontSize:30,fontFamily:'outfit-bold'}}>
            CODEBOX
        </Text>
        <Text style={{textAlign:'center',fontSize:20,marginTop:20,color:Colors.LIGHT_PRIMARY,fontFamily:'outfit'}}>
            A new door to coding world
        </Text>
        <View style={{alignItems:'center',backgroundColor:Colors.WHITE}}>
        <Image source={googleicon} style={{width:40,height:40,}}/>
        <Text style={{fontSize:20, color:Colors.PRIMARY,fontFamily:'outfit'}}>
            Login with Google
        </Text>
        </View>
      </View>
    </View>
  )
}