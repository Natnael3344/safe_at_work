import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomInput from '../components/CustomInput/CustomInput'
import CustomButton from '../components/CustomButton/CustomButton'

const ForgotPasswordScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Forgot Password</Text>
      <Text style={styles.text1}>Enter your email below to recieve your password reset instructions</Text>
      <CustomInput placeholder={'Enter email'}/>
      <CustomButton text={'Send email'}/>
    </View>
  )
}
const styles=StyleSheet.create(
    {
        container:{
            backgroundColor:'white',
            padding:30,
            flex:1,
            justifyContent:"center"
        },
        text:{
            fontSize:24,
            fontWeight:'bold',
            color:'#FF325F',
            marginBottom:40
        },
        text1:{
            fontSize:18,
            color:'#FF325F',
            marginBottom:40
        },
        
    }
)
export default ForgotPasswordScreen