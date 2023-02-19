import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import CustomInput from '../components/CustomInput/CustomInput'
import CustomButton from '../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native';
const SignUpScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign Up</Text>
      <CustomInput placeholder={'Enter full name'}/>
      <CustomInput placeholder={'Enter email'}/>
      <CustomInput placeholder={'Enter phone'}/>
      <CustomInput placeholder={'Enter password'}/>
      <CustomInput placeholder={'Confirm password'}/>
      <CustomButton text={'Sign Up'} onPress={() => {
          navigation.navigate("Dashboard");}}/> 
    </View>
  )
}
const styles= StyleSheet.create(
    {
        container:{
            backgroundColor:'white',
            padding:30,
            flex:1,
            justifyContent:'center'
        },
        text:{
            fontSize:24,
            fontWeight:'bold',
            color:'#FF325F',
            marginBottom:40,

        },
    }
)
export default SignUpScreen