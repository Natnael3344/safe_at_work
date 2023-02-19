import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'
import Logo from '../../../safe_at_work/assets/images/logo.png';
import CustomButton from '../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
const Welcome = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Image source={Logo} resizeMode="cover" style={styles.logo}>
        </Image>
        <Text style={styles.text}>Safe At Work</Text>
        <Text style={styles.text1}>Welcome</Text>
        <Text style={styles.text2}>Welcome to Safe@Work, the app that makes your workplace safer and more secure, one report at a time.</Text>
        <CustomButton text={'Sign Up'} onPress={() => {
          navigation.navigate("sign up");}}/>
        <CustomButton text={'Sign In'} backgroundColor='white' color={'#FF325F'} onPress={() => {
          navigation.navigate("signin");}}/>
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
        justifyContent:'center',
        padding:30
    },
    logo:{
        height:130,
        width:130,
        borderRadius:65,
        alignSelf:'center',
        marginBottom:10
    },
    text:{
        fontSize:24,
        fontWeight:'bold',
        color:'#FF325F',
        alignSelf:"center",
        marginBottom:50
    },
    text1:{
        fontSize:20,
        fontWeight:'bold',
        color:'#FF325F',
        alignSelf:'center',
        marginBottom:20
    },
    text2:{
        fontSize:16,
        color:'#FF325F',
        
    }
})
export default Welcome