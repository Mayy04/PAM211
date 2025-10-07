//imports, todo lo extra que podrían necesitar las screens/pantallas
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';

//zona de componentes/main
export default function App() {
  const[Contador, setContador]=useState(0);
  return (
    <View style={styles.container}>
      <Text>Contador: {Contador}</Text>
      <Button title='Agregar' onPress={()=>setContador(Contador+1)}/>
      <Button title='Quitar' onPress={()=>setContador(Contador-1)}/>
      <Button title='Reiniciar' onPress={()=>setContador(Contador==0)}/>
      <StatusBar style="auto" />
    </View>
  );
}

//zona de estilos, se le asigna la estetica, posicion, etc a los componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
