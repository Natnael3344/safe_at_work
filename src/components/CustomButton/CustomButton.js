import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress,text,backgroundColor}) => {
  return (
    <Pressable onPress={onPress} style={[styles.button,backgroundColor && { backgroundColor }]}>
      <Text style={styles.text}>
      {text}
      </Text>
    </Pressable>
  )
}
const styles=StyleSheet.create(
    {
        button:{
            marginTop:30,
            height:50,
            marginLeft:60,
            marginRight:60,
            borderRadius:5, 
            backgroundColor:'#FF325F',
            justifyContent:'center'
        },
        text:{
            color:'white',
            fontSize:20, 
            fontWeight:'bold',
            alignSelf:'center',
           
        }
    }
)
export default CustomButton