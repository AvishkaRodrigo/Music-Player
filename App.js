import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../SAS/components/Header';
import Buttons from './components/Button';
import Flatlist from './components/FlatList';
import Profile from './components/Profile';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={{flex : 1}}>
        <Header/>
      </View >
      <View style={{flex : 1.5}}>
        <Profile/>
      </View>
      <View style={{flex : 1}}>
        <Buttons/>
      </View>
      <View style={{flex : 5}}>
          <Flatlist/>
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
});
