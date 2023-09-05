import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState(0);

  function somar(){
      setResultado(parseFloat(numero1) + parseFloat(numero2));
  }

  function subtrair(){
      setResultado(numero1 - numero2);
  }

  function multiplicar(){
      setResultado(numero1 * numero2);
  }

  function dividir(){
      if(numero2 > 0)
        setResultado(numero1 / numero2);
      else 
        alert('Não é possível calcular!');
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          onChangeText={setNumero1}
          placeholder="Número 1"
          />
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          onChangeText={setNumero2}
          placeholder="Número 2"
          />
        <Text>Resultado: {resultado}</Text>
      </View>
      
      <View style={styles.buttonContainer}>

        <TouchableOpacity 
            onPress={somar} 
            style={[styles.button,styles.bgGreen]}>
          <Text>Somar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={subtrair} style={styles.button}>
          <Text>Subtrair</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={multiplicar} 
          style={[styles.button, styles.bgGray]}>
          <Text>Multiplicar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={dividir} style={styles.button}>
          <Text>Dividir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 16
  },
  inputContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'start',
  },
  button: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    marginLeft: 4
  },
  bgGreen: {
    backgroundColor: '#0f0'
  },
  bgGray: {
    backgroundColor: '#f5f5f5'
  },
  input: {
    padding: 16,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    marginBottom: 8
  }
});