import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../styles/StyleSheet';
import { Neurosity, ReactNativeTransport } from "@neurosity/sdk";
import { NativeModules, NativeEventEmitter, Platform } from "react-native";
import BleManager from "react-native-ble-manager";


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
    const [arr1, setArr1] = useState([]);
    const [arr2, setArr2] = useState([]);
  
    useEffect(() => { connectToNeurosityHeadset("Justine.choueiri@berkeley.edu", "guqwom-dytxoB-zipxa7").then(setNeurosity1); }, []);
    useEffect(() => {
        if (neurosity1) {
          const subscription = neurosity1.focus().subscribe(data => {
            setArr1(prevArr1 => [...prevArr1, Math.round(data["probability"]*100)]);
          });
    
          // Clean up the subscription when the component unmounts
          return () => subscription.unsubscribe();
        }
      }, [neurosity1]);


      useEffect(() => { connectToNeurosityHeadset("olegviatkin@berkeley.edu", 'xejpip-gedkas-bisGu1').then(setNeurosity2); }, []);
      useEffect(() => {
          if (neurosity2) {
            const subscription = neurosity2.focus().subscribe(data => {
              setArr2(prevArr2 => [...prevArr2, Math.round(data["probability"]*100)]);
            });
      
            // Clean up the subscription when the component unmounts
            return () => subscription.unsubscribe();
          }
        }, [neurosity2]);


    const handleBackButtonPress = () => {
        navigation.navigate('Home');
    };
    

    return (
        <View style={styles.container}>
            <View style={{ alignSelf: 'flex-start' }}>
                <Button title="Back to Home" onPress={handleBackButtonPress} />
            </View>
            <View>
            {arr1.length > 0 && <Text>{JSON.stringify(arr1[arr1.length - 1])}</Text>}
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
        </View>
    );
}

export default CreateEventScreen;