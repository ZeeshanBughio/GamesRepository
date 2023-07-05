import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Alert} from 'react-native';

const TicTacToeGame = () => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState('🐦');
  const [winner, setWinner] = useState(null);

  const handleCellPress = index => {
    if (board[index] === '' && !winner) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);

      const newWinner = checkWinner(newBoard);
      if (newWinner) {
        setWinner(newWinner);
        Alert.alert(`Player ${newWinner} wins!`);
      } else {
        setCurrentPlayer(currentPlayer === '🐦' ? '🐼' : '🐦');
      }
    }
  };

  const handleResetGame = () => {
    setBoard(Array(9).fill(''));
    setCurrentPlayer('🐦');
    setWinner(null);
  };

  const checkWinner = board => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      // [0, 4, 6],
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  };

  const renderCell = index => (
    <TouchableOpacity
      style={styles.cell}
      onPress={() => handleCellPress(index)}
      activeOpacity={0.8}
      disabled={winner !== null}>
      <Text style={styles.cellText}>{board[index]}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.board}>
        {board.map((cell, index) => renderCell(index))}
      </View>
      <TouchableOpacity style={styles.resetButton} onPress={handleResetGame}>
        <Text style={styles.resetButtonText}>Reset Game</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  board: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  cell: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    margin: 5,
  },
  cellText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  resetButton: {
    marginTop: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#5ca775',
    borderRadius: 8,
  },
  resetButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default TicTacToeGame;
