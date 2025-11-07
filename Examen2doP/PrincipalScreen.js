import { Text, View, ImageBackground, ScrollView, Image, TouchableOpacity, StyleSheet} from 'react-native'
import { useState } from 'react'
import SopaVerduras from './SopaVerduras';
import Camarones from './Camarones';

export default function PrincipalScreen(){
    const[screen, setScreen]=useState('menu')
    switch('menu'){
        case 'sopa':
            return <SopaVerduras/>;
        case 'camarones':
            return <Camarones/>
    case 'menu':
        default:
    return (
        <View style={styles.container}>
        <ScrollView style={styles.scrollarea}>
        <ImageBackground source={require('./assets/fondo.jpeg')} resizeMode='cover'
      ></ImageBackground>
        <Text style={styles.titulos}>CHEFF</Text>
        <Text style={styles.contenido}>Somos un restaurante de comida mexicana.</Text>
        <Text style={styles.titulos}>Entradas</Text>
        <Image source={require('./assets/entrada_sopaverduras.jpeg')} styles={style.imagen}/>
        <TouchableOpacity style={styles.boton1} onPress={()=>setScreen('sopa')}>
            <Text style={styles.textoBoton}>Ver detalles</Text>
        </TouchableOpacity>
        </ScrollView>
        </View>   
    );
  }
}
const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center'
    },
    titulos:{
        fontSize:30,
        color: '#7c4619ff'

    },
    scrollarea:{
        flex: 1,
        width: '90%',
    },

})