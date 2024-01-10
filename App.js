import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handlePress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
      setInput('');
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      padding: 20,
      backgroundColor: isDarkMode ? '#1a1a1a' : '#f4f4f4',
    },
    inputContainer: {
      marginBottom: 15,
    },
    input: {
      backgroundColor: isDarkMode ? '#333333' : '#fff',
      borderRadius: 10,
      color: isDarkMode ? '#ffffff' : '#000000',
      fontSize: 42,
      paddingHorizontal: 20,
      textAlign: 'right',
    },
    resultText: {
      fontSize: 32,
      textAlign: 'right',
      color: isDarkMode ? '#ffffff' : '#000000',
      marginTop: 5,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 15,
    },
    button: {
      backgroundColor: isDarkMode ? '#444444' : '#e0e0e0',
      borderRadius: 10,
      flex: 1,
      marginHorizontal: 8,
      marginVertical: 8,
      paddingVertical: 20,
    },
    doubleButton: {
      flex: 2,
    },
    buttonText: {
      textAlign: 'center',
      fontSize: 26,
      color: isDarkMode ? '#ffffff' : '#000000',
    },
    toggleButton: {
      position: 'absolute',
      top: 20,
      right: 20,
      padding: 12,
      backgroundColor: isDarkMode ? '#444444' : '#e0e0e0',
      borderRadius: 20,
      elevation: 5,
    },
    toggleButtonText: {
      color: isDarkMode ? '#ffffff' : '#000000',
      fontSize: 16,
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <TouchableOpacity style={styles.toggleButton} onPress={toggleTheme}>
        {isDarkMode ? (
          <FontAwesome5 name="moon" size={24} color={isDarkMode ? 'white' : 'black'} />
        ) : (
          <AntDesign name="bulb1" size={24} color={isDarkMode ? 'white' : 'black'} />
        )}
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <Text style={styles.resultText}>{result}</Text>
        <Text style={styles.input} numberOfLines={1} ellipsizeMode="head">
          {input}
        </Text>
      </View>
      <View style={styles.row}>
        {['7', '8', '9', '/'].map((item) => (
          <TouchableOpacity key={item} style={styles.button} onPress={() => handlePress(item)}>
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        {['4', '5', '6', '*'].map((item) => (
          <TouchableOpacity key={item} style={styles.button} onPress={() => handlePress(item)}>
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        {['1', '2', '3', '-'].map((item) => (
          <TouchableOpacity key={item} style={styles.button} onPress={() => handlePress(item)}>
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        {['0', '.', '=', '+'].map((item) => (
          <TouchableOpacity
            key={item}
            style={item === '=' ? [styles.button, styles.doubleButton] : styles.button}
            onPress={() => handlePress(item)}>
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={[styles.button, styles.doubleButton]} onPress={() => handlePress('C')}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
