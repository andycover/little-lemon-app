import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function LittleLemonWelcome () {
    return (
        <View
            style={welcomeStyles.container}
        >
            <Text
                style={welcomeStyles.welcomeHeader}
            >Little Lemon</Text>
            <Text
                style={welcomeStyles.welcomeText}
            >
            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
            </Text>
        </View>
    )
}

const welcomeStyles = StyleSheet.create({
    container: {
        flex: 0.75,
        marginTop: 40,
        //marginLeft: 40,
        width: '100%',
        backgroundColor: "#495E57",
        alignItems: 'center', 
        //justifyContent: 'center',
    },
    welcomeHeader: {
        color: '#F4CE14',
        fontSize: 30,
    },
    welcomeText: {
        //marginTop: 40,
        //marginLeft: 40,
        //width: '100%',
        fontSize: 20,
        padding: 50,
        backgroundColor: "#ffa",
        alignItems: 'center', 
        //justifyContent: 'space-evenly'
        //justifyContent: 'center',
    }
})