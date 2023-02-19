import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import CustomInput from '../components/CustomInput/CustomInput'
import DropdownComponent from '../components/CustomDropdown/DropdownComponent'

const DetailsOfVictim = () => {
  return (
    <View>
      <Text style={styles.text}>Details of Victim</Text>
      <CustomInput placeholder={'Enter name'}/>
      <CustomInput placeholder={'Enter age'}/>
      <DropdownComponent item={'gender'} data={[{label:'male',value:'1'},{label:'female',value:'2'}]}/>
      <DropdownComponent item={'highest qualification'}
      data={[
        {label:'HighSchool Diploma',value:'1'},
        {label:'Higher Certificate',value:'2'},
        {label:'National Diploma',value:'3'},
        {label:'Bachelor\'s Degree',value:'4'},
        {label:'Honours Degree',value:'5'},
        {label:'Master\'s Degree',value:'6'},
        {label:'Doctoral Degree',value:'7'}
      ]}
      />
      <CustomInput placeholder={'Enter address'}/>
      <CustomInput placeholder={'Enter company'}/>
      <CustomInput placeholder={'Enter position'}/>
      <CustomInput placeholder={'Enter company adress'}/>
      <CustomInput placeholder={'Enter mobile'}/>
      <CustomInput placeholder={'Enter email'}/>
      
    </View>
  )
}
const styles=StyleSheet.create(
  {
    text:{
       fontSize:24,
        fontWeight:'bold',
        color:'#FF325F',
        marginTop:20
    }
  }
)
export default DetailsOfVictim