import React from "react";
import {View,StyleSheet,Text,Image} from 'react-native';
import COLORS from "../assets/colors";
import IMAGES from "../assets/images";
import STRINGS from "../assets/strings";
import { fontScale, heightScale, widthScale } from "../utils/Utils";

export const Splash=()=>{
    return(
        <View style={styles.body}>
            <Image
            style={styles.logo}
            source={IMAGES.SPLASH_IMG}
             />
            <Text style={styles.text}>{STRINGS.INTRO_TEXT}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    body:{
        flex:1,
        alignItems:'center',
        backgroundColor:COLORS.SPLASH_BACKGROUND
    },
    logo:{
        width:widthScale(150),
        height:heightScale(150),
        marginHorizontal:widthScale(20),
        marginVertical:heightScale(20)
    },
    text:{
        fontSize:fontScale(20),
        color:COLORS.WHITE
    }
})