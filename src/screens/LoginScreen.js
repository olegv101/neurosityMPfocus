import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../styles/StyleSheet';
import { TouchableOpacity } from 'react-native';


const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here
    };

    return (
        <View style={[styles.container, { paddingHorizontal: 20, }]}>
            <Text style={[styles.text, { fontSize: 64, fontWeight: 600, marginBottom: 20 }]}>Login</Text>

            <Text style={[styles.text, { fontSize: 20, fontWeight: 300, marginBottom: 5 }]}>Email Address</Text>
            <TextInput
                placeholder="hello@company.com"
                value={username}
                onChangeText={setUsername}
                style={{
                    height: 51,
                    width: 348,
                    backgroundColor: '#E7E2D9',
                    borderRadius: 10,
                    paddingLeft: 10, // Add padding to the left
                    fontSize: 20, // Increase the font size
                    fontWeight: '300', // Make the font weight lighter
                }}
            />
            <Text style={[styles.text, { fontSize: 20, fontWeight: 300, marginBottom: 5, marginTop: 22 }]}>Password</Text>

            <TextInput
                placeholder="Your password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                style={{
                    height: 51,
                    width: 348,
                    backgroundColor: '#E7E2D9',
                    borderRadius: 10,
                    paddingLeft: 10, // Add padding to the left
                    fontSize: 20, // Increase the font size
                    fontWeight: '300', // Make the font weight lighter
                }}
            />
            <View style = {{flex: 1,}}>
            <TouchableOpacity style={[styles.blackFilledButton, { marginBottom: 50, position: 'absolute', bottom: 0, }]} onPress={handleLogin}>
                    <Text style={[styles.text, { textAlign: 'center', fontSize: 20, fontWeight: 600, color: 'white', paddingTop: 9 }]}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.fakeBottomNav}></View>
        </View>
    );
};

export default LoginScreen;