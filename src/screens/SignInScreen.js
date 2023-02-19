import { View, Text,Image, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import Logo from '../../../safe_at_work/assets/images/logo.png';
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
const SignInScreen = () => {
    const navigation = useNavigation();
    const [checked, setChecked] = React.useState('first');
  return (
    <View style={styles.container}>
        <Pressable onPress={() => {
          navigation.navigate("Language");}}>
        <Feather name="globe" size={40} color='#FF325F' style={styles.icon}/>
        </Pressable>
        
        <Image source={Logo} resizeMode="cover" style={styles.logo}>
        </Image>
      <Text style={styles.text}>Sign In</Text>
      <View style={styles.radio}>
        <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
        color='#FF325F'
        uncheckedColor='#FF325F'
      />
      <Text style={styles.text4}>Victim</Text>
        </View>
        <View style={styles.radio}>
      <RadioButton
        color='#FF325F'
        uncheckedColor='#FF325F'
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
      <Text style={styles.text4}>Police officer</Text>
      </View>
      <CustomInput placeholder={'Enter email'}/>
      <CustomInput placeholder={"Enter password"}/>
      <Pressable onPress={() => {
          navigation.navigate("Forgot Password");}}>
        <Text style={styles.text1}>Forgot Password?</Text>
      </Pressable>
      <CustomButton text={'Sign In'} onPress={() => {
          navigation.navigate("Dashboard");}}/>
      <View style={styles.container1}>
        <Text style={styles.text2}>New user? </Text>
        <Pressable onPress={() => {
          navigation.navigate("sign up");}}>
            <Text style={styles.text3}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  )
}
const styles=StyleSheet.create({
    radio:{
        flexDirection:'row',
        alignItems:'center',
    },
    text4:{
        fontSize:18,
        fontWeight:'bold',
        color:'#FF325F'
    },
    icon:{
        alignSelf:'flex-end'
    },
    container:{
        margin:30
    },
    logo:{
        height:140,
        width:140,
        borderRadius:70,
        alignSelf:'center',
        marginBottom:40,
        marginTop:20
    },
    text:{
        fontSize:24,
        fontWeight:'bold',
        color:'#FF325F',
        marginBottom:40
    },
    text1:{
        color:'#FF325F',
        fontSize:17,
        marginTop:20,
        alignSelf:'flex-end'
    },
    text2:{
        color:'#1a3b5a',
        fontSize:17
    },
    text3:{
        color:'#FF325F',
        fontSize:17
    },
    container1:{
        marginTop:20,
        flexDirection:'row',
        alignSelf:'center'
    }
})
export default SignInScreen