import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const Evidence = () => {
  return (
    <View>
      <Text style={styles.text}>Evidence</Text>
      <AntDesign name="camerao" size={20} color='black'/>
      <Pressable style={styles.button}> 
      <EvilIcons name="search" size={20} color='black'/>
      <Text>Choose files</Text>
      </Pressable>
    </View>
  )
}
const styles=StyleSheet.create({
    button:{
        flexDirection:'row'
    },
    text:{
      fontSize:24,
       fontWeight:'bold',
       color:'#FF325F',
       marginTop:20
   }
})
export default Evidence