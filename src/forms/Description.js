import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import CustomInput from '../components/CustomInput/CustomInput'

const Description = () => {
  return (
    <View>
      <Text style={styles.text}>Description</Text>
      <CustomInput height={130} placeholder={'Enter description...'}/>
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
export default Description