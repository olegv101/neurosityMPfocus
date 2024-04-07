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
        <View style={[styles.container, { padding: 30 }]}>
            <Text style={[styles.text, { fontSize: 20, fontWeight: '300' }]}>Your Points To Date:</Text>
            <Text style={[styles.text, { fontSize: 128, fontWeight: 600, marginTop: -20 }]}>3021</Text>
            <View style={{ width: '100%', height: 1, backgroundColor: '#1A1A1A', marginBottom: 30, marginTop: 10 }}></View>
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
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                    activeOpacity={1} // Keep the child elements responsive by setting the opacity to 1
                    onPressOut={handleCloseModal} // Close modal when pressing outside the modal content
                >
                    {/* This inner View stops the touch propagation */}
                    <View style={[styles.modalView, { backgroundColor: '#1A1A1A', height: 300 }]} onStartShouldSetResponder={() => true}>
                        <Text style = {[styles.text, {color: 'white', marginTop: -5}]}>Your User Code</Text>
                        <Text style = {[styles.text, {color: 'white', fontSize: 14, marginTop: 0}]}>to join study sessions</Text>
                        <Text style={[styles.text, { fontSize: 80, color: 'white' }]}>828221</Text>
                        <TouchableOpacity style={[styles.blackFilledButton, { marginBottom: 25, backgroundColor: '#F0ECE4' }]} onPress={handleCloseModal}>
                            <Text style={[styles.text, { textAlign: 'center', fontSize: 20, fontWeight: 600, paddingTop: 9 }]}>
                                Copy / Share
                            </Text>
                        </TouchableOpacity>

                    </View>
                </TouchableOpacity>
            </Modal>
            <View style={[styles.fakeBottomNav, { marginTop: 10 }]}></View>
        </View>
    );
};


export default HomePage;