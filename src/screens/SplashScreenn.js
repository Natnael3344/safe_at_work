import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import Logo from '../../../safe_at_work/assets/images/2.png';

const SplashScreenn = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image source={Logo} resizeMode="cover" style={styles.logo}>
        </Image>
      </View>
      <Text style={styles.text}>Safe At Work</Text>
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
        backgroundColor:'#FF325F',
        flex:1,
        justifyContent:'center'
    },
    container1:{
        backgroundColor: '#ece7e8',
        height:140,
        width:140,
        borderRadius:70,
        padding:10,
        alignSelf:'center',
        
    },
    logo:{
        height:130,
        width:130,
        borderRadius:65
    },
    text:{
        fontSize:24,
        fontWeight:'bold',
        color:'white',
        alignSelf:'center',
        marginTop:10
        
    }
})

export default SplashScreenn