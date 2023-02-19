import React, { useState } from "react";
import Stepper from "react-native-stepper-ui";
import { View, Alert, Text,ScrollView } from "react-native";
import DetailsOfVictim from "../forms/DetailsOfVictim";
import TypeOfComplaint from "../forms/TypeOfComplaint";
import AccusedInformation from "../forms/AccusedInformation";
import Description from "../forms/Description";
import Witness from "../forms/Witness";
import Evidence from "../forms/Evidence";

const content = [
    <DetailsOfVictim/>,
    <TypeOfComplaint/>,
    <AccusedInformation/>,
    <Description/>,
    <Witness/>,
    <Evidence/>
  ];
const Complaint = () => {
    const [active, setActive] = useState(0);
    return (
        <View style={{ padding:20, backgroundColor:'white',flex:1}}>
            <ScrollView>
          <Stepper
          stepStyle={{backgroundColor:'#FF325F'}}
          buttonStyle={{marginTop:20,width:70,alignItems:'center',backgroundColor:'#FF325F'}}
            active={active}
            content={content}
            onNext={() => setActive((p) => p + 1)}
            onBack={() => setActive((p) => p - 1)}
            onFinish={() => Alert.alert("Finish")}
          />
          </ScrollView>
        </View>
      );
}

export default Complaint