import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, FlatList} from 'react-native';

const MemoryMatchingGame = () => {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    resetGame();
  }, []);

  useEffect(() => {
    if (selectedCards.length === 2) {
      checkMatch();
    }
  }, [selectedCards]);

  const resetGame = () => {
    const newCards = generateCards();
    setCards(newCards);
    setSelectedCards([]);
    setScore(0);
  };

  const generateCards = () => {
    const symbols = [
      '🐶',
      '🐱',
      '🐭',
      '🐹',
      '🐰',
      '🦊',
      '🐻',
      '🐼',
      '🐨',
      '🐯',
      '🦁',
      '🐮',
      '🐷',
      '🐽',
      '🐸',
      '🐵',
      '🙈',
      '🙉',
      '🙊',
      '🐒',
      '🐔',
      '🐧',
      '🐦',
      '🐤',
      '🐣',
      '🐥',
      '🦆',
      '🦅',
      '🦉',
      '🦇',
      '🐺',
      '🐗',
      '🐴',
      '🦄',
      '🐝',
      '🐛',
      '🦋',
      '🐌',
      '🐞',
      '🐜',
      '🦟',
      '🦗',
      '🕷',
      '🕸',
    ];
    const duplicatedSymbols = [...symbols, ...symbols];
    const shuffledSymbols = shuffleArray(duplicatedSymbols);
    return shuffledSymbols.map((symbol, index) => ({
      id: index,
      symbol: symbol,
      isFlipped: false,
      isMatched: false,
    }));
  };

  const shuffleArray = array => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const flipCard = card => {
    if (selectedCards.length === 2 || card.isFlipped) {
      return;
    }

    const updatedCards = cards.map(c => {
      if (c.id === card.id) {
        return {...c, isFlipped: true};
      }
      return c;
    });

    setSelectedCards([...selectedCards, card]);
    setCards(updatedCards); // Move the setCards after setSelectedCards
  };

  const checkMatch = () => {
    if (selectedCards[0].symbol === selectedCards[1].symbol) {
      const updatedCards = cards.map(c => {
        if (c.id === selectedCards[0].id || c.id === selectedCards[1].id) {
          return {...c, isFlipped: true, isMatched: true};
        }
        return c;
      });
      setCards(updatedCards);
      setSelectedCards([]);
      const updatedScore = score + 1; // Update the score
      setScore(updatedScore);

      if (updatedScore === cards.length / 2) {
        // All cards are matched, game over
        alert('Congratulations! You won the game!');
        resetGame();
      }
    } else {
      setTimeout(() => {
        const updatedCards = cards.map(c => {
          if (c.id === selectedCards[0].id || c.id === selectedCards[1].id) {
            return {...c, isFlipped: false};
          }
          return c;
        });
        setCards(updatedCards);
        setSelectedCards([]);
      }, 1000);
    }
  };

  const renderCard = ({item}) => (
    <TouchableOpacity
      style={[styles.card, item.isMatched && styles.matchedCard]}
      onPress={() => flipCard(item)}
      activeOpacity={0.8}>
      {item.isFlipped && <Text style={styles.cardText}>{item.symbol}</Text>}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.scoreText}>Score: {score}</Text>

      <FlatList
        data={cards}
        renderItem={renderCard}
        keyExtractor={item => item.id.toString()}
        numColumns={4}
        columnWrapperStyle={styles.columnWrapper}
      />

      <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
        <Text style={styles.resetButtonText}>Reset Game</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#f0f0f0',
  },
  scoreText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    width: 80,
    height: 80,
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  matchedCard: {
    backgroundColor: '#5ca775',
  },
  cardText: {
    fontSize: 30,
  },
  columnWrapper: {
    justifyContent: 'space-evenly',
  },
  resetButton: {
    marginTop: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#5ca775',
    borderRadius: 8,
    marginBottom: 50,
  },
  resetButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default MemoryMatchingGame;
