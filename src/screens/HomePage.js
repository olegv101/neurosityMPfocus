import React, { useState } from 'react';
import { View, Text, Button, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import styles from '../styles/StyleSheet';

const HomePage = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [joinModalVisible, setJoinModalVisible] = useState(false);


    // Placeholder functions for button actions
    const handleCreateEvent = () => {
        navigation.navigate('CreateEvent');
        // Navigation to Event Creation Page
    };

    const handleJoinEvent = () => {
        setJoinModalVisible(true); // Show the join event modal
    };

    const handleUserCodeButtonPress = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    const handleCloseJoinModal = () => {
        setJoinModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <Text>Your Points To Date: 0</Text>
            <Text>Past Events You've Joined:</Text>
            <View>
                <Button
                    title="Create Event"
                    onPress={handleCreateEvent}
                />
                <Button
                    title="Join Event"
                    onPress={handleJoinEvent}
                />
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={joinModalVisible}
                onRequestClose={handleCloseJoinModal}
            >
                <View style={styles.joinModalContainer}>
                    <View style={styles.joinModal}>
                        <Text>Enter Event Code</Text>
                        <Button title="Enter Code" onPress={() => { }} /> {/* Implement code entry functionality */}
                        <Button title="Close" onPress={handleCloseJoinModal} />
                    </View>
                </View>
            </Modal>

            <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0, marginBottom: 20 }}>
                <Button
                    title="Your User Code"
                    onPress={handleUserCodeButtonPress}
                />
                <Text style={{ textAlign: 'center' }}>Use this to join study events</Text>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleCloseModal}
            >
                <TouchableOpacity
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}
                    activeOpacity={1} // Keep the child elements responsive by setting the opacity to 1
                    onPressOut={handleCloseModal} // Close modal when pressing outside the modal content
                >
                    {/* This inner View stops the touch propagation */}
                    <View style={[styles.modalView, {}]} onStartShouldSetResponder={() => true}>
                        <Text>Show User Code</Text>
                        <Text>to join study sessions</Text>
                        <Text>828221</Text>
                        <Button title="Close" onPress={handleCloseModal} />
                    </View>
                </TouchableOpacity>
            </Modal>
            <View style = {[styles.fakeBottomNav, {marginTop: 10}]}></View>
        </View>
    );
};


export default HomePage;