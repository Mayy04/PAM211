import { Text, StyleSheet, View, TouchableOpacity, Switch } from 'react-native';
import { useState } from 'react';

export default function BotonesScreen() {
  const [prendido, setPrendido] = useState(false);
  const backgroundColor = prendido ? '#f5f5f5' : '#121212';
  const textColor = prendido ? '#000' : '#fff'; 

  return (
    <View style={[styles.container,{backgroundColor}, ]}>
      <Text style={[styles.texto, {color: textColor}]}>Estado: {prendido ? 'Prendido' : 'Apagado'}</Text>

      <TouchableOpacity style={styles.botonEncender} onPress={() => setPrendido(true)}>
        <Text style={styles.textoBoton}>Prender</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botonApagar} onPress={() => setPrendido(false)}>
        <Text style={styles.textoBoton}>Apagar</Text>
      </TouchableOpacity>

      <View style={styles.switchContainer}>
        <Text style={[styles.switchLabel, {color : textColor}]}>Control de switch</Text>
        <Switch value={prendido} onValueChange={setPrendido} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#ffffff',
  },
  texto:{
    color:'#000000',
    fontSize:30,
    marginBottom:30,
    fontFamily:'Times New Roman',
    fontWeight:'bold',
  },
  botonEncender:{
    backgroundColor:'#4CAF50',
    paddingVertical:10,
    paddingHorizontal:25,
    borderRadius:8,
    marginBottom:20,
  },
  botonApagar:{
    backgroundColor:'#F44336',
    paddingVertical:10,
    paddingHorizontal:25,
    borderRadius:8,
    marginBottom:20,
  },
  textoBoton:{
    color:'#fff',
    fontSize:16,
    fontWeight:'600',
  },
  switchContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:20,
  },
  switchLabel:{
    fontSize:16,
    marginRight:10,
  },
});
