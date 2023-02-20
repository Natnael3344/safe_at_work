import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { createDrawerNavigator, DrawerContent, DrawerContentScrollView, DrawerItems } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
const DrawerHead = (props) => {
  return (

    <View  style={{backgroundColor:'#F8F8FF',flex:1}}>
    <View
      style={{
        backgroundColor: '#FF325F',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        padding:20,
        alignItems:"flex-start"
      }}
    >
      <View style={styles.container1}><Fontisto name="female" size={40} color='#FF325F' style={styles.icon}/></View>
    <Text style={{ color: 'white', fontSize: 25, fontWeight:'bold' }}>
      Account Name
      </Text>
      <Text>account@gmail.com</Text>
    </View>
    <View>
    <Text>Profile</Text>
    </View>
    <Pressable style={styles.container2}>
    <MaterialCommunityIcons name="update" size={40} color='#FF325F' />
    <Text style={styles.text}>Update profile</Text>
    </Pressable>
    <Pressable style={styles.container2}>
    <MaterialCommunityIcons name="logout" size={40} color='#FF325F' />
    <Text style={styles.text}>Logout</Text>
    </Pressable>
    </View>
    
  )
}
const styles=StyleSheet.create({
  container1:{
    height:60,
    width:60,
    backgroundColor:'white',
    borderRadius:30,
    justifyContent:'center',
},
container2:{
  flexDirection:'row',
  alignItems:'center',
  marginLeft:20,
  marginBottom:20
},
icon:{
    alignSelf:'center',
},
text:{
  fontSize:20,
  fontWeight:'bold',
  color:'#FF325F',
  marginLeft:20
}
})
export default DrawerHead