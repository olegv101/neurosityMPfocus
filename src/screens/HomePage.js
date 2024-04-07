import React, { useState } from 'react';
import { View, Text, Button, Modal, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
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
            <View style={{ width: '100%', height: 1, backgroundColor: '#1A1A1A', marginBottom: 20, marginTop: 10 }}></View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                <TouchableOpacity style={[styles.button, { width: 150, backgroundColor: 'white', borderRadius: 10, padding: 10, borderWidth: 1 }]} onPress={handleJoinEvent}>
                    <Text style={[styles.buttonText, { color: 'black', fontWeight: 600, textAlign: 'center', paddingTop: 5, }]}>Join Event</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, { width: 150, backgroundColor: '#1A1A1A', borderRadius: 10, padding: 15 }]} onPress={handleCreateEvent}>
                    <Text style={[styles.buttonText, { color: 'white', fontWeight: 600, textAlign: 'center' }]}>Create Event</Text>
                </TouchableOpacity>

            </View>

            <Text style={[styles.text, { fontWeight: 300 }]}>Past Events You've Joined:</Text>

            <ScrollView style={{ marginTop: 10, borderRadius: 20 }}>
                {/* Card */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#F0ECE4', borderWidth: 1, borderRadius: 20, borderColor: "#CCC9C2", height: 112, paddingHorizontal: 10, marginBottom: 20 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: 50, alignContent: 'center', borderRightWidth: 1, borderColor: '#CCC9C2', paddingRight: 5 }}>
                            <Text style={[styles.text, { marginTop: 40, fontSize: 24, }]}>4/7</Text>
                        </View>
                        <View style={{ padding: 10, backgroundColor: '#F0ECE4' }}>
                            <Text style={[styles.text, { fontSize: 20, fontWeight: 500, marginTop: 0 }]}> Math 53 Lock in </Text>
                            <Text> 11:00PM - 2:00AM</Text>
                            <Text> with: </Text>
                            <Text style = {[styles.text, {fontSize: 14, fontWeight: 300}]}> Jason, Ludo, Justine </Text>
                        </View>
                    </View>
                    <View style={{ width: 50, alignContent: 'center' }}>
                        <Text style={[styles.text, { marginTop: 40, fontSize: 24 }]}>+20</Text>
                    </View>
                </View>

                {/* Card */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#F0ECE4', borderWidth: 1, borderRadius: 20, borderColor: "#CCC9C2", height: 112, paddingHorizontal: 10, marginBottom: 5 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: 50, alignContent: 'center', borderRightWidth: 1, borderColor: '#CCC9C2', paddingRight: 5 }}>
                            <Text style={[styles.text, { marginTop: 40, fontSize: 24, }]}>4/7</Text>
                        </View>
                        <View style={{ padding: 10, backgroundColor: '#F0ECE4' }}>
                            <Text style={[styles.text, { fontSize: 20, fontWeight: 500, marginTop: 0 }]}> Math 53 Lock in </Text>
                            <Text> 11:00PM - 2:00AM</Text>
                            <Text> with: </Text>
                            <Text style = {[styles.text, {fontSize: 14, fontWeight: 300}]}> Jason, Ludo, Justine </Text>
                        </View>
                    </View>
                    <View style={{ width: 50, alignContent: 'center' }}>
                        <Text style={[styles.text, { marginTop: 40, fontSize: 24 }]}>+20</Text>
                    </View>
                </View>
                
            </ScrollView>

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
                        <Text style={[styles.text, { color: 'white', marginTop: -5 }]}>Your User Code</Text>
                        <Text style={[styles.text, { color: 'white', fontSize: 14, marginTop: 0 }]}>to join study sessions</Text>
                        <Text style={[styles.text, { fontSize: 90, color: 'white' }]}>828221</Text>
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