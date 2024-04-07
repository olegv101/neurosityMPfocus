import { Neurosity, ReactNativeTransport } from "@neurosity/sdk";
import { NativeModules, NativeEventEmitter, Platform } from "react-native";
import BleManager from "react-native-ble-manager";

const displayFocusScreen = ({ navigation }) => {
const neurosity = new Neurosity({
  autoSelectDevice: true,
  bluetoothTransport: new ReactNativeTransport({
    BleManager,
    bleManagerEmitter: new NativeEventEmitter(NativeModules.BleManager),
    platform: Platform.OS
  }),
  streamingMode: "bluetooth-with-wifi-fallback"
});

const neurosity1 = new Neurosity({
    autoSelectDevice: true,
    bluetoothTransport: new ReactNativeTransport({
      BleManager,
      bleManagerEmitter: new NativeEventEmitter(NativeModules.BleManager),
      platform: Platform.OS
    }),
    streamingMode: "bluetooth-with-wifi-fallback"
  });

neurosity.focus().subscribe(data => {
    console.log(focus);
  });
neurosity1.focus().subscribe(data => {
    console.log(focus);
  });
}