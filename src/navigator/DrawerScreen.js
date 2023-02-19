import 'react-native-gesture-handler';
import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { createDrawerNavigator, DrawerContent, DrawerContentScrollView } from '@react-navigation/drawer';

import DrawerHead from './DrawerHead';
import DashBoardScreen from '../screens/DashBoardScreen';
const Drawer = createDrawerNavigator();
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
const DrawerScreen = () => {
  return (
    
    <Drawer.Navigator initialRouteName="dashboard"  drawerContent={props => <DrawerHead {...props} />}>
        <Drawer.Screen name="dashboard" component={DashBoardScreen}
        options={{
            title:'',
            headerStyle: {
              backgroundColor: '#FF325F',
            },
            headerRight: () => (
            <View style={styles.title}>
                <View style={styles.container1}><Fontisto name="female" size={30} color='#FF325F' style={styles.icon}/></View>
                <Ionicons name="notifications" size={30} color='white' style={styles.icon}/>
            </View>),
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Drawer.Navigator> 
     
  )
}
const styles=StyleSheet.create({
    container:{
        width:'100%',
        height:200,
        color:'#0C7E7D'
    },
    title:{
        flexDirection:'row',
        paddingRight:20
        
    },
    container1:{
        height:50,
        width:50,
        backgroundColor:'white',
        borderRadius:25,
        justifyContent:'center',
        marginRight:20
        
    },
    icon:{
        alignSelf:'center',
        
    }
});
export default DrawerScreen