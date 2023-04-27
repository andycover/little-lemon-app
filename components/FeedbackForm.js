import React, { useState } from "react";
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, Platform } from "react-native";

const FeedbackForm = () => {
    const [name, onChangeName] = useState('');
    const [email, onChangeEmail] = useState('');
    const [phoneNumber, onChangePhoneNumber] = useState('');
    const [message, onChangeMessage] = useState('');

    return (

        <ScrollView style={styles.container}
            keyboardDismissMode="on-drag"
        >
            <Text style={styles.headingSection}>
                How was your visit to Little Lemon?
            </Text>
            <Text style={styles.infoSection}>
                Little Lemon is a charming neighborhood bistro that serves simple food
                and classic cocktails in a lively but casual environment. We would love
                to hear your experience with us!
            </Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={onChangeName}
                placeholder="Your Name"
                maxLength={32}
                onFocus={() => {Alert.alert("Name is focussed")}} 
                onBlur={() => {Alert.alert("Name is now blurred")}} 
            />
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={onChangeEmail}
                placeholder="you@email.com"
                keyboardType="email-address"
                maxLength={64}
            />
            <TextInput
                style={styles.input}
                value={phoneNumber}
                onChangeText={onChangePhoneNumber}
                keyboardType="phone-pad"
                placeholder="phone number"
                maxLength={16}
                clearButtonMode={"always"}
            />
            <TextInput
                style={styles.messageInput}
                value={message}
                onChangeText={onChangeMessage}
                placeholder="your comments here!"
                multiline={true}
                maxLength={256}                
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: 'EDEFEE',
        backgroundColor: '#F4CE14',
    },
    messageInput: {
        height: 150,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        backgroundColor: '#F4CE14',
        //textAlign: 'left',
        //justifyContent: 'flex-start',
    },
    infoSection: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
        backgroundColor: '#495E57',
    },
    headingSection: {
        fontSize: 28,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
        backgroundColor: '#495E57',
    },
});

export default FeedbackForm; 