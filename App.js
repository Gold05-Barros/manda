// App.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/screen3d.png')} // imagem enviada
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Bem-vindo ao Manda</Text>

      <TouchableOpacity style={styles.button} onPress={() => console.log('Começar')}>
        <Text style={styles.buttonText}>Começar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 220,
    height: 220,
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    color: 'back',
    fontWeight: '600',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#F2A900',
    paddingVertical: 14,
    paddingHorizontal: 38,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
  },
});
