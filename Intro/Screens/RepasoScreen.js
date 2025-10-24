import { Text, StyleSheet, View, ImageBackground, Dimensions,
   Button, Alert, TextInput, Platform, Switch
} from 'react-native'
import React, { useState } from 'react'
const BackgroundImage = require('../assets/download.jpeg');

export default function RepasoScreen() {
  const [terminos, setTerminos] = useState(false);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');

  
  const alerta = () => { 
    const regexCorreo=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (nombre.trim() !== '' && correo.trim() !== '' && terminos === true) {
      if (Platform.OS === 'web') {
        window.alert('Registro realizado con éxito, nombre: '+ nombre, 'correo: '+ correo);
      } else {
        Alert.alert('Registro realizado con éxito, nombre: '+ nombre, 'correo: '+ correo);
      }
    }
    if (nombre.trim() === '') {
      Platform.OS === 'web' ? window.alert('Error, ingresa nombre') : Alert.alert('Error, ingresa nombre');
    } 
    if (correo.trim() === '') {
      Platform.OS === 'web' ? window.alert('Error, ingresa correo') : Alert.alert('Error, ingresa correo');
    }
    if (!terminos) {
      Platform.OS === 'web' ? window.alert('Error, debes aceptar términos y condiciones') : Alert.alert('Error, debes aceptar términos y condiciones');
    }
    if (!regexCorreo.test(correo)){
    Platform.OS === 'web' ? window.alert('Error, correo incorrecto') : Alert.alert('Error, correo incorrecto');
  }
     
  
  }

  return (
    <View style={styles.background}>
      <ImageBackground 
        source={BackgroundImage}
        style={styles.background}
        resizeMode='cover'
      >
        <View style={styles.containerInput}>
          <Text style={styles.texto}>Registro</Text>

          <Text style={styles.texto2}>Nombre:</Text>
          <TextInput 
            style={styles.input} 
            placeholder='Ingresa tu nombre completo'
            value={nombre}
            onChangeText={setNombre}
            maxLength={50}
          />

          <Text style={styles.texto2}>Correo:</Text>
          <TextInput 
            style={styles.input} 
            placeholder='Ingresa tu correo'
            value={correo}
            onChangeText={setCorreo}
            maxLength={50}
          />

          <Text>Acepto términos y condiciones</Text>
          <Switch value={terminos} onValueChange={setTerminos}/>
          <Button title='Registrarse' onPress={alerta}/>
        </View>
      </ImageBackground>
    </View>
  )
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  containerInput: {
    flex: 1,
    backgroundColor: 'rgba(135, 207, 235, 0.46)', // fondo semi-transparente
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    margin: 30,
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginBottom: 20,
    width: '80%',
    backgroundColor: '#fff',
  },
  texto: {
    color: '#000000',
    fontSize: 30,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  texto2: {
    color: '#000000',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  background: {
    flex: 1,
    width: width,
    height: height,
  },
});
