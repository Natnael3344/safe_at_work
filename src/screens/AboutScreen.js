import { View, Text,StyleSheet,ScrollView  } from 'react-native'
import React from 'react'

const AboutScreen = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.text}>
      The Safe@Work initiative is a platform aimed at creating safe and respectful working environments for women.{'\n\n'}The app provides a secure and confidential space for reporting instances of sexual harassment and offers support and information on rights and relevant laws. Join us in our mission to end sexual harassment at work.{'\n\n'}It has an objective to provide a dedicated and authentic platform for working women to raise the complaint of sexual harassment at workplace through digital intervention.{'\n\n'}It includes formation of a dedicated District level ‘Local Committees’ which will look after the mentioned complaints under the supervision of a District Authority and act to resolve the issue within the legal bounds.{'\n\n'}It intent to digitize the whole process in a systematic and optimal manner with Real-Time Information transfer and Management."
      
      </Text>
    </View>
  </ScrollView>
  )
}
const styles=StyleSheet.create({
    
    text:{
     color:'white',
     fontWeight:'bold',
     fontSize:17
    },
    container:{
     margin:20,
     padding:20,
     backgroundColor:'#FF325F',
     borderRadius:10
    },
   
 })
export default AboutScreen