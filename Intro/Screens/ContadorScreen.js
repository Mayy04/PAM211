//imports, todo lo extra que podrían necesitar las screens/pantallas
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';

//zona de componentes/main
export default function ContadorScreeen() {

  const[Contador, setContador]=useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Contador:</Text>
      <Text style={styles.texto2}>{Contador}</Text>

      <View style={styles.botonesContainer}>
      <Button title='Agregar' onPress={()=>setContador(Contador+1)} color="green"/>
      <Button title='Quitar' onPress={()=>setContador(Contador-1)} color="red"/>
      <Button title='Reiniciar' onPress={()=>setContador(0)}color="orange"/>
      </View >

      <StatusBar style="auto" />
    </View>
  );
}

//zona de estilos, se le asigna la estetica, posicion, etc a los componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#21002dff',
    alignItems: 'center',//trabaja sobre eje x (start, center, end)
    justifyContent: 'center',//trabaja sobre eje y
  },
  texto:{
    color: '#ffffffff',
    fontSize: 30, //no se pueden asignar pixeles ni medidad estaticas ya que se renderiza diferente e cada pantalla
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    fontStyle:"italic",
    textDecorationLine:"underline",
    textDecorationColor:"skyblue",
    //textDecorationThickness:"40px",
    },
    texto2:{
    color: '#ffffffff',
    fontSize: 30, //no se pueden asignar pixeles ni medidad estaticas ya que se renderiza diferente e cada pantalla
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    fontStyle:"italic",
    textDecorationLine:"line-through",
    textDecorationColor:"black",
    },
    botonesContainer:{
        marginTop: 25,
        flexDirection: 'row',
        gap:10,
    },
});
