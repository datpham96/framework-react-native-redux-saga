import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../../features';
import navigationTypes from '../types';

const RootNavStack = createStackNavigator();

const RootStack = () => {
  return (
    <RootNavStack.Navigator>
      <RootNavStack.Screen
        name={navigationTypes.home.screen}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </RootNavStack.Navigator>
  );
};

export default RootStack;
