import { View, Text,StyleSheet,Pressable } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import CustomPressable from '../components/CustomButton/CustomPressable';
const DashBoardScreen = () => {
    const navigation = useNavigation(); 
  return (
    <View>
      <LinearGradient colors={['#FF325F', '#d698a4']} style={styles.container}>
      <View style={styles.container2}>
      <View style={styles.container1}> 
      <MaterialIcons name="report" size={60} color='#FF325F'/>
      <View style={styles.underline}>
      <Text style={styles.text2}> File a complaint </Text>
      </View>
      </View>
      <View style={styles.container1}> 
      <MaterialIcons name="track-changes" size={60} color='#FF325F'/>
      <View style={styles.underline}>
      <Text style={styles.text2}> Track a complaint </Text>
      </View>
      </View>
      </View>
    </LinearGradient>
    <View style={styles.container3}>
      <Text style={styles.text}>My DashBoard</Text>
      <CustomPressable text={"File a complaint"} backgroundColor="#9274f6"  onPress={() => {
          navigation.navigate("Complaint");}
      }/>
      <CustomPressable text={"Track a complaint"} backgroundColor="#f44236"/>
      <CustomPressable text={"About the initiative"} backgroundColor="#f7a93a" onPress={() => {
          navigation.navigate("about");}}/>
      <CustomPressable text={"FAQ"} backgroundColor="#33f7a1" onPress={() => {
          navigation.navigate("faq");}}/>
    </View>
    <Pressable style={styles.container4}>
    <FontAwesome5 name="phone" size={20} color='white'/>
      <Text style={styles.text1}>CALL</Text>
    </Pressable>
    </View>
  )
}
const styles=StyleSheet.create({
    underline:{
      paddingBottom:3,
      borderBottomColor:'#FF325F',
      borderBottomWidth:1
      
    },
    text2:{
      fontWeight:'bold',
      color:'#FF325F',
      fontSize:16,
  
    },
    text1:{
      fontWeight:'bold',
      color:'white',
      fontSize:16,
      marginLeft:20
    },
   container:{
      height:200,
      borderBottomLeftRadius:50,
      borderBottomRightRadius:50,
   },
   container1:{
    borderRadius:10,
    height:180, 
    width:180,
    backgroundColor:'#fafafa',
    marginTop:70, 
    shadowColor: '#000000',  
    shadowOffset: { width: 2, height: 6 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 15, 
    justifyContent:'space-evenly',
    alignItems:'center'
   },
   container2:{
    flexDirection:'row',
    justifyContent:'space-evenly'
   }, 
   container3:{
    backgroundColor:'#fafafa',
    borderRadius:10,
    marginTop:90, 
    marginLeft:20,
    marginRight:20,
    shadowColor: '#000000',  
    shadowOffset: { width: 2, height: 6 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 15,
    padding:20,
    justifyContent:'space-evenly'
   },
   text:{
    color:'#FF325F',
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center'
   },
   container4:{
    marginTop:20,
    backgroundColor:'#FF325F',
    marginBottom:20,
    flexDirection:'row',
    padding:20,
    maxHeight:70,
    maxWidth: 140,
    borderRadius:30,
    shadowColor: '#000000',  
    shadowOffset: { width: 2, height: 6 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 15,
    justifyContent:'space-evenly',
    alignSelf:'center'
   }
  })
  
  
export default DashBoardScreen