import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Calculator from './src/screens/Calculator';
import GuessingGame from './src/screens/GuessingGame';
import HangmanGame from './src/screens/HangmanGame';
import MemoryMatchingGame from './src/screens/MemoryMatchingGame';
import TicTacToeGame from './src/screens/TicTacToeGame';
const BottomTab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let iconSource;

            if (route.name === 'Calculator') {
              iconSource = focused
                ? require('./src/assets/calculator.png')
                : require('./src/assets/calculator.png');
            } else if (route.name === 'GuessingGame') {
              iconSource = focused
                ? require('./src/assets/guess.png')
                : require('./src/assets/guess.png');
            } else if (route.name === 'HangmanGame') {
              iconSource = focused
                ? require('./src/assets/hangman.png')
                : require('./src/assets/hangman.png');
            } else if (route.name === 'MemoryMatchingGame') {
              iconSource = focused
                ? require('./src/assets/memory.png')
                : require('./src/assets/memory.png');
            } else if (route.name === 'TicTacToeGame') {
              iconSource = focused
                ? require('./src/assets/TicTacToeGame.png')
                : require('./src/assets/TicTacToeGame.png');
            }

            return <Image source={iconSource} style={styles.tabIcon} />;
          },
        })}>
        <BottomTab.Screen
          name="Calculator"
          component={Calculator}
          options={{
            headerShown: false,
          }}
        />
        <BottomTab.Screen
          name="GuessingGame"
          component={GuessingGame}
          options={{
            headerShown: false,
          }}
        />
        <BottomTab.Screen
          name="HangmanGame"
          component={HangmanGame}
          options={{
            headerShown: false,
          }}
        />
        <BottomTab.Screen
          name="MemoryMatchingGame"
          component={MemoryMatchingGame}
          options={{
            headerShown: false,
          }}
        />
        <BottomTab.Screen
          name="TicTacToeGame"
          component={TicTacToeGame}
          options={{
            headerShown: false,
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = {
  tabBar: {
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#d3d3d3',
  },
  tabIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
};
