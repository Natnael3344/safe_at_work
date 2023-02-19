import { View, Text,Pressable,StyleSheet } from 'react-native'
import React from 'react'
import { color } from 'react-native-reanimated'

const CustomPressable = ({onPress,text,backgroundColor}) => {
  return (
        <Pressable onPress={onPress} style={[styles.button,backgroundColor && { backgroundColor }]}>
      <Text style={styles.text}>
      {text}
      </Text>
    </Pressable>
    
    
  )
}
const styles=StyleSheet.create({
    button:{
        backgroundColor:'#f44236', 
        borderRadius:40,
        minWidth:'100%',
        minHeight:50,
        marginTop:20,
        justifyContent:'center'
    },
    text:{
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
        fontSize:16
      }
})
export default CustomPressable