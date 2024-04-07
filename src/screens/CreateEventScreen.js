import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../styles/StyleSheet';

const CreateEventScreen = ({ navigation }) => {
    const [value, setValue] = useState('');

    const handleBackButtonPress = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <View style={{ alignSelf: 'flex-start' }}>
                <Button title="Back to Home" onPress={handleBackButtonPress} />
            </View>
            <Text>Create Event</Text>
            <Text>Invite people with their code</Text>
            <TextInput
                keyboardType="numeric"
                maxLength={6}
                placeholder="Enter up to 6 digits"
                value={value}
                onChangeText={(text) => {
                    if (/^\d*$/.test(text)) {
                        setValue(text);
                    }
                }}
            />
        </View>
    );
};

export default CreateEventScreen;