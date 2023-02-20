import { ScrollView,View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomCard from '../components/CustomCard/CustomCard'
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors'

const TrackScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>February 3, 2023</Text>
      <CustomCard text={'Axysysxh5455'} text1={'Priya Ashish'} text2={'Jackob PVT. LTD.'} text3={'Demand'} text4={'Solved'} color='green'/>
      <Text style={styles.text}>February 3, 2023</Text>
      <CustomCard text={'Axysysxh5455'} text1={'Priya Ashish'} text2={'Jackob PVT. LTD.'} text3={'Demand'} text4={'Pending'} color='yellow'/>
      <Text style={styles.text}>February 3, 2023</Text>
      <CustomCard text={'Axysysxh5455'} text1={'Priya Ashish'} text2={'Jackob PVT. LTD.'} text3={'Demand'} text4={'Rejected'} color='red'/>
    </ScrollView>
  )
}
const styles=StyleSheet.create({
    container:{
        padding:20,
        backgroundColor:'white'
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        color:'#FF325F',
        marginBottom:20
    }
})
export default TrackScreen