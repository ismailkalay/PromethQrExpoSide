import React, { useState, useEffect, Component } from 'react';
import { Text, View, StyleSheet, Button, Pressable,  Linking } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import styles from './style';

export default function Home(){
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar Code with Type ${type} and data ${data} has been scanned`);
  };

  if (hasPermission === null){
    return <Text>Requesting for Camera permission</Text>
  }

  if (hasPermission === false){
    return <Text>No Access to Camera</Text>
  }

  return(
    <View style={styles.viewStyle}>
      <View style={styles.barcode}>
      <BarCodeScanner style={StyleSheet.absoluteFillObject}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        
      />
      </View>
      
      <View style={styles.pad}></View>
      
      {scanned}
      {/*<Button title='Tekrar okutunuz' onPress={() => setScanned(false)} />*/}
      {
        <Button style={styles.loginButton} title='Tekrar okutunuz' onPress={() => setScanned(false)} />

      }

    </View>
  ) 
}



