/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Inbox: () => Node = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Text> Inbox </Text>
    </SafeAreaView>
  );
};

export default Inbox;
