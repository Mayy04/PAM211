import { Text, StyleSheet, View, Button, Alert, TextInput, Platform } from 'react-native'
import React, { useState } from 'react'

export default function TextScreen() {
const [nombre, setNombre]=useState('');
const [contrasena, setContrasena]=useState('');
const [comentario, setComentario]=useState('');
const mostrarAlerta = ()=>{
  if (nombre.trim()==='' || contrasena.trim()==='' || comentario.trim()===''){
    if(Platform.OS==='web'){
      window.alert('Error, por favor ingresa todos los campos');
    }else{
      Alert.alert('Error, por favor ingresa todos los campos');
    }
  }else{
    if(Platform.OS === 'web'){
      window.alert('Hola '+ nombre);
    }else{
      Alert.alert('Hola ' + nombre);
    }
  }
}
  
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>InputScreen</Text>
        <TextInput style={styles.recuadro} placeholder='Escribe tu nombre'
        value={nombre}
        onChangeText={setNombre}
        maxLength={50}/>

        <TextInput style={styles.recuadro} placeholder='Escribe tu contraseña'
        value={contrasena}
        onChangeText={setContrasena}
        maxLength={50}
        secureTextEntry
        //numeric
        />
        <TextInput style={styles.recuadro2} placeholder='Escribe un comentario'
        value={comentario}
        onChangeText={setComentario}
        maxLength={50}
        multiline={true}
        numberOfLines={4}/>
        
        <Button title='Mostrar Saludo' onPress={mostrarAlerta}/>
      </View>
    )
  }
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
    padding:20,
  },
  titulo:{
    fontSize:22,
    fontWeight:'bold',
    marginBottom:15,
  },
  recuadro:{
    borderWidth:1,
    borderColor:'#000',
    padding:10,
    marginBottom:20,
  },
  recuadro2:{
    borderWidth:1,
    borderColor:'#000',
    padding:17,
    marginBottom:20,
  },
})