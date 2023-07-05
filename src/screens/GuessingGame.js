import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

const {width, height} = Dimensions.get('window');

const GuessingGame = () => {
  const [userInput, setuserInput] = useState('0');
  const [randomNumber, setrandomNumber] = useState(generateRandomNumber());

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function handleGuess() {
    if (!userInput) {
      Alert.alert('Number Kn Likhega');
      return;
    }

    const userGuess = parseInt(userInput);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      Alert.alert('Parhna Nahi AAta Kia 1-100 ke Beech Ka Number Daal Bhae');
      return;
    }

    if (userGuess === randomNumber) {
      Alert.alert('Bara Farig Ha Bhae Tu . Mubarak Ho Sahi Guess Kia Tune');
    } else if (userGuess < randomNumber) {
      Alert.alert('Thora Bara Soch Bhae');
    } else {
      Alert.alert('Halka AA Beta Kahan Urr Raha Ha');
    }

    setuserInput('');
  }

  function handleReset() {
    setuserInput('');
    setrandomNumber(generateRandomNumber());
  }

  return (
    <View style={[styles.container, {backgroundColor: 'black'}]}>
      <Text
        style={[
          styles.buttonText,
          {marginBottom: 10, textTransform: 'uppercase'},
        ]}>
        Guess The Number
      </Text>
      <Text
        style={[
          styles.buttonText,
          {marginBottom: 10, textTransform: 'uppercase'},
        ]}>
        1 - 100
      </Text>
      <Text style={styles.buttonText}>LET'S BEGIN</Text>
      <TextInput
        style={styles.inputContainer}
        placeholder="Number Guess Karen"
        value={userInput}
        keyboardType="decimal-pad"
        onChangeText={setuserInput}
      />
      <TouchableOpacity style={styles.buttons} onPress={() => handleGuess()}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttons, {backgroundColor: '#123456'}]}
        onPress={() => handleReset()}>
        <Text style={styles.buttonText}>Reset Game</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GuessingGame;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    backgroundColor: '#1DA1F2',
    padding: height * 0.01,
    paddingVertical: height * 0.02,
    width: width * 0.43,
    textAlign: 'center',
    border: 1,
    borderColor: '#eb3349',
    margin: 10,
    borderRadius: 5,
    color: 'white',
  },
  inputContainer: {
    width: width * 0.9,
    borderWidth: 2,
    borderColor: '#1DA1F2',
    margin: width * 0.035,
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 25,
    color: 'white',
    textAlign: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 18,
  },
  flexingelements: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  resulttext: {
    color: '#b06ab3',
    fontSize: 100,
    backgroundColor: '#4568dc',
    width: width * 1,
    marginBottom: height * 0.02,
    textAlign: 'center',
    paddingVertical: 22,
    color: 'white',
  },
});
