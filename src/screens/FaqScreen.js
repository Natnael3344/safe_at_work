import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const FaqScreen = () => {
  return (
    <View style={styles.container1}>
      <Text style={styles.text}>What is the purpose of the Safe@Work app?</Text>
      <View style={styles.container}>
        <Text style={styles.text2}>The Safe@Work app aims to provide a platform for women to report instances of sexual harassment in the workplace and receive information and support.</Text>
      </View>
      <Text style={styles.text}>Is the app only for women?</Text>
      <View style={styles.container}>
        <Text style={styles.text2}>No, the app is open to anyone who has experienced or witnessed sexual harassment at work, regardless of gender.</Text>
      </View>
      <Text style={styles.text}>What kind of information is available in the app?</Text>
      <View style={styles.container}>
        <Text style={styles.text2}>The app provides information on the rights of women, relevant Indian Penal Code acts, and the POSH act. It also includes a manual on how to use the application and information about the initiative.</Text>
      </View>
    </View>
  )
}
const styles=StyleSheet.create({
   
    text:{
        color:'#FF325F',
        fontSize:20,
        fontWeight:'bold',
        marginBottom:20,
      
    },
    text2:{
        color:'white',
        fontWeight:'bold',
        fontSize:15
    },
    container:{
        backgroundColor:'#FF325F',
        padding:20,
        borderRadius:10
    },
    container1:{
        padding:20
    }
})
export default FaqScreen