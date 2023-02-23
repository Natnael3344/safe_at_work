import { View, Text,TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder,secureTextEntry,height,}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={[styles.input,height && { height }]}
        value={value}
        placeholderTextColor='#c2cad2'
        secureTextEntry={secureTextEntry}
        onChangeText={setValue}
      />
    </View>
  )
}
const styles= StyleSheet.create(
    {
        container:{
            backgroundColor:'white',
            width:'100%',
            borderColor:'#FF325F',
            borderWidth:1,
            borderRadius:5,
            alignSelf:'center',
            marginTop:20
        },
        input:{
            fontWeight:'bold',
            marginLeft:20,
            color:'black'
        }
    }
);
export default CustomInput