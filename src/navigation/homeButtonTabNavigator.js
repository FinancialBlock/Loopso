import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import {Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Profile from '../screens/Profile';
import Inbox from '../screens/Inbox';
import Discover from '../screens/Discover';

const Tab = createBottomTabNavigator();

const HomeButtonTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {
          backgroundColor: '#000',
        },
        activeTintColor: '#fff',
      }}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name={'home'} size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Search'}
        component={Discover}
        options={{
          tabBarIcon: ({color}) => (
            <EvilIcons name={'search'} size={40} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Camera'}
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <EvilIcons name={'camera'} size={40} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Inbox'}
        component={Inbox}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name={'inbox'} size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name={'person-circle-outline'} size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeButtonTabNavigator;
