import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import Picture from '../../../safe_at_work/assets/images/1.png'
import Picture1 from '../../../safe_at_work/assets/images/2.png'
import Picture2 from '../../../safe_at_work/assets/images/3.png'
import CustomButton from '../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native';
const WelcomeScreen = () => {
    const navigation = useNavigation(); 
  return (
    <Swiper style={styles.container}  activeDotColor="#FF325F">
    <View style={styles.container1}>
        <Image source={Picture} style={styles.image}/>
        <Text style={styles.text}>Reporting Work Place {'\n'}Harassment</Text>
        <Text style={styles.text1}>Our app provides all-in-one resource for reporting and addressing workplace harassment.Our app is here to support you in reporting harassment, connecting with resources, and taking steps to create a positive change in your workplace.</Text>
    </View>
    <View style={styles.container3}>
        <Image source={Picture1} style={styles.image}/>
        <Text style={styles.text}>At Safe@Work</Text>
        <Text style={styles.text1}>we believe that everyone has the right to feel safe and respected in the workplace.Our app is designed to provide you with the tools and information you need to navigate this difficult issue and take action to make your workplace safer and more respectful.</Text>
    </View>
    <View style={styles.container4}>
        <Image source={Picture2} style={styles.image}/>
        <Text style={styles.text}>With Safe@Work</Text>
        <Text style={styles.text1}>you are not alone. Our app is your personal advocate for a safe and respectful workplace.We are committed to empowering you with the information, resources, and support you need to address harassment and create a better working environment.</Text>
        <CustomButton text={'Get Started'} onPress={() => {
          navigation.navigate("welcome");}}/>
    </View>
    </Swiper>
    
  )
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:'white',
       
    },
    container1:{
        paddingTop:100,
        paddingLeft:30,
        paddingRight:30,
    },
    container3:{
        backgroundColor:'#f3f4f2',
        paddingTop:100,
        paddingLeft:30,
        paddingRight:30,
        flex:1
    },
    container4:{
        backgroundColor:'#f9f9f8',
        paddingTop:80,
        paddingLeft:30,
        paddingRight:30,
        flex:1
    },
    image:{
        height:200,
        width:200,
        alignSelf:'center'
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        color:'#FF325F',
        marginTop:40,
        
    },
    text1:{
        fontSize:16,
        color:'#FF325F',
        marginTop:40,
        
    }
})
export default WelcomeScreen