import { View, Text, StyleSheet } from 'react-native'
import React,{useState} from 'react';
import { RadioButton } from 'react-native-paper';
const LanguageScreen = () => {
    const [checked, setChecked] = React.useState('first');
  return (
    <View style={styles.container}>
        <View style={styles.radio}>
        <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
        color='#FF325F'
        uncheckedColor='#FF325F'
      />
      <Text style={styles.text}>English</Text>
        </View>
      <View style={styles.radio}>
      <RadioButton
        color='#FF325F'
        uncheckedColor='#FF325F'
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
      <Text style={styles.text}>Hindi</Text>
      </View>
    </View>
  )
}
const styles=StyleSheet.create(
    {
        container:{
            padding:30,
            backgroundColor:'white',
            flex:1
        },
        radio:{
            flexDirection:'row',
            alignItems:'center',
        },
        text:{
            fontSize:18,
            fontWeight:'bold',
            color:'#FF325F'
        }
    }
)
export default LanguageScreen