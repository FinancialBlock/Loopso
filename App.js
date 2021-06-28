/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import type {Node} from 'react';
import Navigation from './src/navigation';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Entypo from "react-native-vector-icons/Entypo";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import createBottomTabNavigator from "@react-navigation/bottom-tabs";

const App: () => Node = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Navigation />
    </SafeAreaView>
  );
};

export default App;
