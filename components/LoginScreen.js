import React, { useState } from "react";
import {
    ScrollView, Text, StyleSheet,
    TextInput, Pressable, ImageBackground,
    View, useWindowDimensions
} from "react-native";

export default function LoginScreen() {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [login, setLogin] = useState(false);
    const window = useWindowDimensions();

    return (
        <ScrollView style={styles.container}>
            {!login && (
                <>
                    <Text style={styles.headerText}>
                        Welcome to Little Lemon.
                        Your favorite neighborhood bistro has a new look.
                        Check it out
                    </Text>
                    <Text style={styles.regularText}>
                        Enter your login information to continue ...
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
                </>
            )}

            {login && (
                <>
                    <ImageBackground
                        source={require('../img/LittleLemonBackground.png')}
                        style={styles.backgroundImage}
                        resizeMode="contain"
                    >
                        <Text style={styles.headerText}>
                            Your favorite neighborhood bistro
                        </Text>
                        <Text style={styles.regularText}>
                            Dear {email === '' ? 'Guest' : email}, a warm welcome from the Little Lemon family.
                            You have logged in successfully
                        </Text>
                    </ImageBackground>

                </>
            )}

            <Pressable
                style={styles.button}
                onPress={() => {
                    setLogin(!login);
                }}>
                <Text style={styles.buttonText}>
                    {login ? 'Login as another user?' : 'Submit'}
                </Text>
            </Pressable>
            <View style={styles.InnerContainer}>
                <Text style={styles.regularText}>Window Dimensions</Text>
                <Text style={styles.regularText}>Height: {window.height}</Text>
                <Text style={styles.regularText}>Width: {window.width}</Text>
                <Text style={styles.regularText}>Font scale: {window.fontScale}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        },
        InnerContainer: {
            flex: 0.3,
            justifyContent: 'center',
        },
        headerText: {
            padding: 40,
            fontSize: 30,
            color: '#EDEFEE',
            textAlign: 'center',
        },
        regularText: {
            fontSize: 20,
            padding: 20,
            marginVertical: 2,
            color: 'white',
            textAlign: 'center',
        },
        emailInput: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            fontSize: 16,
            borderColor: '#EDEFEE',
            backgroundColor: '#F4CE14',
            borderRadius: 12,
        },
        passwordInput: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            fontSize: 16,
            backgroundColor: '#F4CE14',
            borderRadius: 12,
        },
        button: {
            padding: 20,
            margin: 90,
            marginVertical: 64,
            backgroundColor: 'white',
            borderColor: '#EDEFEE',
            borderWidth: 2,
            borderRadius: 32,
        },
        buttonText: {
            color: '#333333',
            textAlign: 'center',
            fontSize: 24,
        },
        backgroundImage: {
            flex: 0.5,
            borderRadius: 10,
            justifyContent: 'center',
        },
    }
);