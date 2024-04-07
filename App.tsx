import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
// import firebase from 'firebase';
// import { firebaseConfig } from './path-to-your-firebase-config';

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

const App = () => {
  return <AppNavigator />;
};

export default App;