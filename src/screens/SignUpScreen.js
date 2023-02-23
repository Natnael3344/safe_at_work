import { View, Text,StyleSheet } from 'react-native'
import React,{useState} from 'react';
import CustomInput from '../components/CustomInput/CustomInput'
import CustomButton from '../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native';
const SignUpScreen = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigation = useNavigation();
    InsertRecord=()=>
    {
      
      if(!firstName,!lastName,!mobile,!email,!pass){
        alert("Required Field is Missing");
      }
      else{
        var InsertApiUrl="http://10.0.2.2:80/api/insert.php";
        var headers={
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        };
        var Data={
          firstName:firstName,
          lastName:lastName,
          mobile:mobile,
          email:email,
          pass:pass,
        }
        fetch(InsertApiUrl, {
  method: 'POST',
  headers: headers,
  body: JSON.stringify({
    Data
  }),
}).then(response => response.json())
.then((response) => {
  alert(response[0].Message);
})
.catch(error => {
  console.error(error);
});
        navigation.navigate("Dashboard");
      }
    }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign Up</Text>
      <CustomInput placeholder={'Enter full name'} setValue={FirstName => setFirstName(FirstName)} value={firstName}/>
      <CustomInput placeholder={'Enter email'} setValue={LastName => setLastName(LastName)} value={lastName}/>
      <CustomInput placeholder={'Enter phone'} setValue={mobile => setMobile(mobile)} value={mobile}/>
      <CustomInput placeholder={'Enter password'} setValue={email => setEmail(email)} value={email}/>
      <CustomInput placeholder={'Confirm password'} setValue={pass => setPass(pass)} value={pass}/>
      <CustomButton text={'Sign Up'} onPress={() => {
        InsertRecord()
          }}/> 
    </View>
  )
}
const styles= StyleSheet.create(
    {
        container:{
            backgroundColor:'white',
            padding:30,
            flex:1,
            justifyContent:'center'
        },
        text:{
            fontSize:24,
            fontWeight:'bold',
            color:'#FF325F',
            marginBottom:40,

        },
    }
)
export default SignUpScreen