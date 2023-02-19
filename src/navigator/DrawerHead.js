import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator, DrawerContent, DrawerContentScrollView, DrawerItems } from '@react-navigation/drawer';

const DrawerHead = (props) => {
  return (

    <View  style={{backgroundColor:'#F8F8FF',flex:1}}>
    <View
      style={{
        backgroundColor: '#DDA0DD',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
    <Text style={{ color: '#2F4F4F', fontSize: 30 }}>
      MARTHA FARRELL FOUNDATION
      </Text>
    </View>
    <View>
    <Text>Profile</Text>
    </View>
    
    </View>
    
  )
}

export default DrawerHead