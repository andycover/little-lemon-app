import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={headerStyles.container}>
      <Image
        style={headerStyles.logo}
        resizeMode='contain'
        source={require('../img/littleLemonHeader.png')}
        accessible={true}
        accessibilityLabel="Little Lemon Logo"
      />
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: {
    flex: 0.12,
    backgroundColor: 'white',
  },
  headerText: {
    padding: 30,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  innerText: {
    fontWeight: 'bold',
  },
  logo: {
    height: 100,
    width: 300,
    resizeMode: 'contain',
}
});
