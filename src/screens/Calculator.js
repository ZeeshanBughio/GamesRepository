import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import * as actioncalling from '../redux/actions/action';
import {useDispatch, useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');

const Calculator = () => {
  const [value1, setvalue1] = useState('');
  const [value2, setvalue2] = useState('');
  const emptyInput = () => {
    setvalue1('');
    setvalue2('');
  };
  const dispatch = useDispatch();
  const Result = useSelector(state => state.auth.result);
  const colorsgradient = ['#4568dc', '#b06ab3'];

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.resulttext}>{Result}</Text>

          <TextInput
            onChangeText={setvalue1}
            value={value1.toString()}
            placeholder="ENTER A NUMBER 1"
            keyboardType="decimal-pad"
            style={styles.inputContainer}
          />

          <TextInput
            onChangeText={setvalue2}
            value={value2.toString()}
            placeholder="ENTER A NUMBER 2"
            keyboardType="decimal-pad"
            style={styles.inputContainer}
          />

          <View style={styles.flexingelements}>
            <LinearGradient
              colors={colorsgradient}
              start={{x: 1, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.buttons}>
              <TouchableOpacity
                onPress={() => {
                  if (value1 === '' || value2 === '') {
                    alert('Please enter both values.');
                  } else {
                    dispatch(actioncalling.addNumber(value1, value2));
                  }
                }}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </LinearGradient>

            <LinearGradient
              colors={colorsgradient}
              start={{x: 1, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.buttons}>
              <TouchableOpacity
                onPress={() => {
                  if (value1 === '' || value2 === '') {
                    alert('Please enter both values.');
                  } else {
                    dispatch(actioncalling.subtractnumber(value1, value2));
                  }
                }}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
            </LinearGradient>

            <LinearGradient
              colors={colorsgradient}
              start={{x: 1, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.buttons}>
              <TouchableOpacity
                onPress={() => {
                  if (value1 === '' || value2 === '') {
                    alert('Please enter both values.');
                  } else {
                    dispatch(actioncalling.dividenumber(value1, value2));
                  }
                }}>
                <Text style={styles.buttonText}>/</Text>
              </TouchableOpacity>
            </LinearGradient>

            <LinearGradient
              colors={colorsgradient}
              start={{x: 1, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.buttons}>
              <TouchableOpacity
                onPress={() => {
                  if (value1 === '' || value2 === '') {
                    alert('Please enter both values.');
                  } else {
                    dispatch(actioncalling.multiplynumber(value1, value2));
                  }
                }}>
                <Text style={styles.buttonText}>*</Text>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              colors={colorsgradient}
              start={{x: 1, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.buttons}>
              <TouchableOpacity
                onPress={() => {
                  dispatch(actioncalling.clearCalculator());
                  emptyInput();
                }}>
                <Text style={styles.buttonText}>CLEAR</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Calculator;

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
  },
  inputContainer: {
    width: width * 0.9,
    borderWidth: 2,
    borderColor: '#b06ab3',
    margin: width * 0.035,
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 25,
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
  },
});
