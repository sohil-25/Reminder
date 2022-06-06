import React, { useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native';
import PushNotification from "react-native-push-notification";
import IMAGES from '../assets/images';
import LottieView from 'lottie-react-native';
import { ANIM } from '../assets/animation';
import GlobalStyle from '../utils/GlobalStyle';


export default function Splash({ navigation }) {

    useEffect(() => {
        createChannels();
        setTimeout(() => {
            navigation.replace("My Tasks")
        },5000);
    }, []);

    const createChannels = () => {
        PushNotification.createChannel(
            {
                channelId: "test-channel",
                channelName: "Test Channel"
            }
        )
    }

    return (
        <View style={styles.body} >
            {/* <Image
            style={styles.logo}
            resizeMode='cover'
            source={IMAGES.SPLASH_IMG}
            /> */}
            <LottieView source={ANIM.SPLASH_ANIM} autoPlay loop />
            <Text style={[
                GlobalStyle.CustomFontABRI
                ,styles.text]}>
                Manage your task on your way
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#0080ff',
    },
    logo: {
        width: 150,
        height: 150,
        margin: 20,
    },
    text: {
        fontSize: 30,
        color: '#ffffff',
        marginBottom: 100,
        textAlign:'center'
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
    }
})