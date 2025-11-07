import { Text, View, ImageBackground, ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions} from 'react-native'
import { useState } from 'react'
import SopaVerduras from './SopaVerduras';
import Camarones from './Camarones';
import Chilaquiles from './Chilaquiles';
import Pozole from './Pozole';
const {width, height}=Dimensions.get('window');
export default function PrincipalScreen(){
    const[screen, setScreen]=useState('menu')
    switch(screen){
        case 'sopa':
            return <SopaVerduras/>;
        case 'camarones':
            return <Camarones/>;
        case 'chilaquiles':
            return <Chilaquiles/>;
        case 'pozole':
            return <Pozole/>;
    case 'menu':
        default:
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.imagebg}source={require('../assets/fondo.jpeg')} resizeMode='stretch'
>
        <ScrollView style={styles.scrollarea}>
        <Text style={styles.titulos}>CHEFF</Text>
        <Text style={styles.contenido}>Somos un restaurante de comida mexicana.</Text>
        <Text style={styles.titulos}>Entradas</Text>
        <Text style={styles.contenido}>Sopa de verduras</Text>
        <Image source={require('../assets/entrada_sopaverduras.jpeg')} style={styles.imagen}/>
        <TouchableOpacity style={styles.boton1} onPress={()=>setScreen('sopa')}>
            <Text style={styles.textoBoton}>Ver detalles</Text>
        </TouchableOpacity>
        <Text style={styles.contenido}>Camarones</Text>
         <Image source={require('../assets/entrada_camarones.jpeg')} style={styles.imagen}/>
        <TouchableOpacity style={styles.boton1} onPress={()=>setScreen('camarones')}>
            <Text style={styles.textoBoton}>Ver detalles</Text>
        </TouchableOpacity>

        <Text style={styles.titulos}>Platos Fuertes</Text>
        <Text style={styles.contenido}>Chilaquiles</Text>
         <Image source={require('../assets/fuerte_chilaquiles.jpeg')} style={styles.imagen}/>
        <TouchableOpacity style={styles.boton1} onPress={()=>setScreen('chilaquiles')}>
            <Text style={styles.textoBoton}>Ver detalles</Text>
        </TouchableOpacity>
        <Text style={styles.contenido}>Pozole</Text>
         <Image source={require('../assets/fuerte_pozole.jpeg')} style={styles.imagen}/>
        <TouchableOpacity style={styles.boton1} onPress={()=>setScreen('pozole')}>
            <Text style={styles.textoBoton}>Ver detalles</Text>
        </TouchableOpacity>

        
        </ScrollView>
        </ImageBackground>
        </View>   
    );
  }
}

const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
    },
    imagebg:{
        width: width,
        height: height,
    },
    titulos:{
        fontSize:30,
        color: '#7c4619ff'

    },
    scrollarea:{
        flex: 1,
    },
    boton1:{
        backgroundColor: '#c38c00ff',
        padding: 30,
        gap: 5,
        borderRadius:15,
    },
    textoBoton:{
        fontSize:20,
        color:'#fff',
    },
    contenido:{
        color:'#000000ff',
        fontSize:20,
    },
})