import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import CustomInput from '../components/CustomInput/CustomInput'
const Witness = () => {
  return (
    <View>
      <Text style={styles.text}>Witness</Text>
      <CustomInput placeholder={'Enter name'}/>
      <CustomInput placeholder={'Enter contact'}/>
    </View>
  )
}
const styles=StyleSheet.create(
  {
    text:{
       fontSize:24,
        fontWeight:'bold',
        color:'#FF325F',
        marginTop:20
    }
  }
)
export default Witness