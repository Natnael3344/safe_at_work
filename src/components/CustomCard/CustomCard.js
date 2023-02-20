import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const CustomCard = ({text,text1,text2,text3,text4,color}) => {
  return (
    <View style={styles.container}>
        <View style={styles.container1}>
            <Text style={styles.text}>Track number: </Text>
            <Text style={styles.text1}>{text}</Text>
        </View>
        <View style={styles.container1}>
            <Text style={styles.text}>Name: </Text>
            <Text style={styles.text1}>{text1}</Text>
        </View>
        <View style={styles.container1}>
            <Text style={styles.text}>Company: </Text>
            <Text style={styles.text1}>{text2}</Text>
        </View>
        <View style={styles.container1}>
            <Text style={styles.text}>Type: </Text>
            <Text style={styles.text1}>{text3}</Text>
        </View>
        <View style={styles.container1}>
            <Text style={styles.text}>Status: </Text>
            <Text style={StyleSheet.create(color && {color})}>{text4}</Text>
        </View>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
    backgroundColor:'#fafafa',
    shadowColor: '#000000',  
    shadowOffset: { width: 2, height: 6 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 15,
    padding:20,
    marginBottom:20
    },
    container1:{
        flexDirection:'row'
    },
    text:{
       color:'#FF325F',
       fontWeight:'bold' 
    },
    text1:{
        color:"#FF325F"
    }
})
export default CustomCard