import React, { useState } from "react";
import { ScrollView, Text, StyleSheet, TextInput, Alert } from "react-native";

export default function LoginScreen() {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>
                Your favorite neighborhood bistro
            </Text>
            <Text style={styles.regularText}>
                Login to continue
            </Text>
            <TextInput
                style={styles.emailInput}
                value={email}
                onChangeText={onChangeEmail}
                placeholder="you@email.com"
                keyboardType="email-address"
                maxLength={64}
                clearButtonMode={"always"}                
            />
            <TextInput
                style={styles.passwordInput}
                value={password}
                secureTextEntry={true}
                onChangeText={onChangePassword}
                placeholder="password"
                maxLength={16}
                clearButtonMode={"always"}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        },
        headerText: {
            padding: 40,
            fontSize: 30,
            color: '#EDEFEE',
            textAlign: 'center',
        },
        regularText: {
            fontSize: 24,
            padding: 20,
            marginVertical: 8,
            color: '#EDEFEE',
            textAlign: 'center',
        },
        emailInput: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            fontSize: 16,
            borderColor: 'EDEFEE',
            backgroundColor: '#F4CE14',
        },
        passwordInput: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            fontSize: 16,
            backgroundColor: '#F4CE14',
        },
    }
);