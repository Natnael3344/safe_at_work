import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import CustomInput from '../components/CustomInput/CustomInput'

const AccusedInformation = () => {
  return (
    <View>
      <Text style={styles.text}>Accused Information</Text>
      <CustomInput placeholder={'Enter name'}/>
      <CustomInput placeholder={'Enter company'}/>
      <CustomInput placeholder={'Enter position'}/>
      <CustomInput placeholder={'Enter contact detail if any'}/>
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
export default AccusedInformation