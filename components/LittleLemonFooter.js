import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function LittleLemonFooter() {
    return (
        <View style={footerStyles.container}> 
            <Text style={footerStyles.footerText}>
                All rights reserved by Little Lemon, 2023
            </Text>
        </View>
    );
}

const footerStyles = StyleSheet.create({
    container: {
      flex: 0.02, 
      alignItems: 'center', //justifyContent: 'center',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      //height: 30, // you can adjust the height as needed
      backgroundColor: '#F4CE14',
    },
    footerText: {
      //padding: 20, 
      fontSize: 15, color: 'black',
      fontStyle: 'italic'
    }
  }
);
