import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const words = [
  'Algeria',
  'Angola',
  'Benin',
  'Botswana',
  'Burkina Faso',
  'Burundi',
  'Cabo Verde',
  'Cameroon',
  'Central African Republic',
  'Chad',
  'Comoros',
  'Democratic Republic of the Congo',
  'Republic of the Congo',
  'Djibouti',
  'Egypt',
  'Equatorial Guinea',
  'Eritrea',
  'Ethiopia',
  'Gabon',
  'Gambia',
  'Ghana',
  'Guinea',
  'Guinea Bissau',
  'Kenya',
  'Lesotho',
  'Liberia',
  'Libya',
  'Madagascar',
  'Malawi',
  'Mali',
  'Mauritania',
  'Mauritius',
  'Morocco',
  'Mozambique',
  'Namibia',
  'Niger',
  'Nigeria',
  'Rwanda',
  'Sao Tome and Principe',
  'Senegal',
  'Seychelles',
  'Sierra Leone',
  'Somalia',
  'South Africa',
  'South Sudan',
  'Sudan',
  'Swaziland',
  'Tanzania',
  'Togo',
  'Tunisia',
  'Uganda',
  'Zambia',
  'Zimbabwe',
  'Armenia',
  'Azerbaijan',
  'Bahrain',
  'Bangladesh',
  'Bhutan',
  'Brunei',
  'Cambodia',
  'China',
  'Cyprus',
  'Georgia',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Israel',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Lebanon',
  'Malaysia',
  'Maldives',
  'Mongolia',
  'Myanmar',
  'Nepal',
  'North Korea',
  'Oman',
  'Pakistan',
  'Palestine',
  'Philippines',
  'Qatar',
  'Russia',
  'Saudi Arabia',
  'Singapore',
  'South Korea',
  'Sri Lanka',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Thailand',
  'Timor Leste',
  'Turkey',
  'Turkmenistan',
  'United Arab Emirates',
  'Uzbekistan',
  'Vietnam',
  'Yemen',
];

const HangmanGame = () => {
  const [secretWord, setSecretWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [remainingAttempts, setRemainingAttempts] = useState(6);

  useEffect(() => {
    generateNewWord();
  }, []);

  const generateNewWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    const newWord = words[randomIndex];
    setSecretWord(newWord);
    setGuessedLetters([]);
    setRemainingAttempts(6);
    console.log(newWord);
  };

  const handleLetterPress = letter => {
    if (guessedLetters.includes(letter)) {
      return; // Letter already guessed
    }

    const newGuessedLetters = [...guessedLetters, letter];
    setGuessedLetters(newGuessedLetters);

    if (!secretWord.includes(letter)) {
      setRemainingAttempts(remainingAttempts - 1);
    }
  };

  const getMaskedWord = () => {
    return secretWord
      .split('')
      .map(letter => (guessedLetters.includes(letter) ? letter : '_'))
      .join(' ');
  };

  const renderAlphabetButtons = () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return alphabet.split('').map((letter, index) => (
      <TouchableOpacity
        key={index}
        style={[
          styles.alphabetButton,
          guessedLetters.includes(letter) && styles.disabledButton,
        ]}
        onPress={() => handleLetterPress(letter)}
        disabled={guessedLetters.includes(letter)}>
        <Text style={styles.alphabetButtonText}>{letter}</Text>
      </TouchableOpacity>
    ));
  };

  const renderHangmanImage = () => {
    const hangmanImages = [
      require('../assets/Hangman-0.png'),
      require('../assets/Hangman-1.png'),
      require('../assets/Hangman-2.png'),
      require('../assets/Hangman-3.png'),
      require('../assets/Hangman-4.png'),
      require('../assets/Hangman-5.png'),
      require('../assets/Hangman-6.png'),
    ];
    return (
      <Image
        style={styles.hangmanImage}
        source={hangmanImages[6 - remainingAttempts]}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hangman Game</Text>
      <Text style={styles.title}>Guess The Country</Text>
      <View style={styles.wordContainer}>
        <Text style={styles.word}>{getMaskedWord()}</Text>
      </View>
      <View style={styles.alphabetContainer}>{renderAlphabetButtons()}</View>
      <Text style={styles.remainingAttempts}>
        Remaining Attempts: {remainingAttempts}
      </Text>
      {remainingAttempts < 6 && renderHangmanImage()}
      {remainingAttempts === 0 && (
        <TouchableOpacity
          style={styles.newGameButton}
          onPress={generateNewWord}>
          <Text style={styles.newGameButtonText}>New Game</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  wordContainer: {
    marginBottom: 20,
  },
  word: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  alphabetContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  alphabetButton: {
    backgroundColor: '#1DA1F2',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  alphabetButtonText: {
    color: 'white',
    fontSize: 16,
  },
  remainingAttempts: {
    fontSize: 18,
    marginBottom: 20,
  },
  hangmanImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  newGameButton: {
    backgroundColor: '#1DA1F2',
    padding: 10,
    borderRadius: 5,
  },
  newGameButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default HangmanGame;
