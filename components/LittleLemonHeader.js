import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function LittleLemonHeader() {
    return (
      <View style={headerStyles.container}>
        <Text
          style={headerStyles.headerText}
          numberOfLines={3}
          >
          Welcome to
          <Text style={headerStyles.innerText}> Little Lemon</Text>
        </Text>
      </View>
    );
  }

  const headerStyles = StyleSheet.create({
    container: {
      flex: 0.20,
      backgroundColor: '#F4CE14',
    },
    headerText: {
      padding: 40,
      fontSize: 30,
      color: 'black',
      textAlign: 'center',
    },
    innerText: {
      fontWeight: 'bold',
    },
  });


/* const styles = StyleSheet.create({
    topView: {
      //height: 50, 
      //width: '100%', 
      borderBottomWidth: 5, 
      borderBottomColor: '#eee',

      flex: 0.2, 
      alignItems: 'center', 
      justifyContent: 'center',       
      backgroundColor: '#F4CE14',
    },
  },
  {
    headerText: {
      //padding: 20, 
      fontSize: 40, 
      //color: 'black',
      
    },
  },
); */