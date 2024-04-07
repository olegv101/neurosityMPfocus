import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../styles/StyleSheet';
import { Neurosity, ReactNativeTransport } from "@neurosity/sdk";
import { NativeModules, NativeEventEmitter, Platform } from "react-native";
import BleManager from "react-native-ble-manager";
import { TouchableOpacity } from 'react-native';


async function connectToNeurosityHeadset(email, password) {
    const neurosity = new Neurosity({
        autoSelectDevice: true,
        bluetoothTransport: new ReactNativeTransport({
            BleManager,
            bleManagerEmitter: new NativeEventEmitter(NativeModules.BleManager),
            platform: Platform.OS
        }),
        streamingMode: "bluetooth-with-wifi-fallback"
    });

    await neurosity.login({
        email,
        password
    });

    return neurosity;
}

const CreateEventScreen = ({ navigation }) => {
    const [value, setValue] = useState('');
    const [neurosity1, setNeurosity1] = useState(null);
    const [neurosity2, setNeurosity2] = useState(null);
    const [subscription1, setSubscription1] = useState(null);
    const [subscription2, setSubscription2] = useState(null);
    const [arr1, setArr1] = useState([]);
    const [arr2, setArr2] = useState([]);

    const startNeurosity = () => {
        connectToNeurosityHeadset("Justine.choueiri@berkeley.edu", "guqwom-dytxoB-zipxa7").then(setNeurosity1);
        connectToNeurosityHeadset("olegviatkin@berkeley.edu", 'xejpip-gedkas-bisGu1').then(setNeurosity2);
    }

    const stopNeurosity = () => {
        if (subscription1) {
            subscription1.unsubscribe();
            setSubscription1(null);
        }
        if (subscription2) {
            subscription2.unsubscribe();
            setSubscription2(null);
        }
    }

    useEffect(() => {
      if (neurosity1) {
          const sub = neurosity1.focus().subscribe(data => {
              setArr1(prevArr1 => [...prevArr1, Math.round(data["probability"] * 100)]);
              setSubscription1(sub);
            });
      }
  }, [neurosity1]);
  
  useEffect(() => {
      if (neurosity2) {
          const sub = neurosity2.focus().subscribe(data => {
              setArr2(prevArr2 => [...prevArr2, Math.round(data["probability"] * 100)]);
              setSubscription2(sub);
            });
      }
  }, [neurosity2]);

    const handleBackButtonPress = () => {
        navigation.navigate('Home');
    };


    return (
        <View style={[styles.container, { padding: 20 }]}>
            <View style={{ alignSelf: 'flex-start' }}>
                <TouchableOpacity style={styles.button} onPress={handleBackButtonPress}>
                    <Text style={styles.buttonText}>Back to Home</Text>
                </TouchableOpacity>
            </View>
            <View>
                {arr1.length > 0 && <Text style = {[styles.text, { textAlign: 'center',fontSize: 120, fontWeight: 600}]}>{JSON.stringify(arr1[arr1.length - 1])}</Text>}
            </View>
            <View>
                {arr2.length > 0 && <Text>{JSON.stringify(arr2[arr2.length - 1])}</Text>}
            </View>

            <Button title="Create Event" onPress={connectToNeurosityHeadset} />
            <Button
                title="Check Connection"
                onPress={async () => {
                    const isConnected = await checkConnection(neurosity);
                    console.log(`Neurosity device is ${isConnected ? 'connected' : 'not connected'}`);
                }}
            />
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
        <Button title="Start" onPress={startNeurosity} />
        <Button title="Stop" onPress={stopNeurosity} />
            <View style={styles.fakeBottomNav}></View>
        </View>
    );
}

export default CreateEventScreen;