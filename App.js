/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from 'react';
 import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   TouchableOpacity,
   Linking,
 } from 'react-native';
import detectEthereumProvider from '@metamask/detect-provider';
 
 const App: () => Node = () => {
  const [message, setMessage] = useState('hello');
  var message1;
  if (window.ethereum){
    message1 = 'ON!';
  } else {
    message1 = 'NOT ON!';
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={() => setMessage(message + 1)}>
        <Text style={styles.buttonTextStyle}>
          Crypto Wallet Logins {message1}
        </Text>
      </TouchableOpacity>
      <Text
        style={styles.registerTextStyle}
        onPress={() => Linking.openURL('https://ethereum.org/en/wallets/')}>
        What are wallets?
      </Text>
    </View>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     paddingTop: 10,
     backgroundColor: '#27292A',
     justifyContent: 'center',
   },
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
   buttonStyle: {
     backgroundColor: '#7DE24E',
     borderWidth: 0,
     color: 'FFFFFF',
     borderColor: '#7DE24E',
     height: 40,
     alignItems: 'center',
     borderRadius: 30,
     marginLeft: 35,
     marginRight: 35,
     marginTop: 20,
     marginBottom: 25,
   },
   mainBody: {
     flex: 1,
     justifyContent: 'center',
     backgroundColor: 'white',
     alignContent: 'center',
   },
   registerTextStyle: {
     color: 'white',
     textAlign: 'center',
     fontWeight: 'bold',
     fontSize: 14,
     alignSelf: 'center',
     // padding: 1,
   },
   buttonTextStyle: {
     color: '#FFFFFF',
     paddingVertical: 10,
     fontSize: 16,
     fontWeight: '600',
   },
 });
 
 export default App;
 