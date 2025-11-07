import { Text, View, Dimensions, StyleSheet, ImageBackground, Image } from 'react-native'
const {width, height}=Dimensions.get('window');
export default function SopaVerduras() {
    return (
      <View>
        <ImageBackground style={styles.imagebg}source={require('../assets/fondo.jpeg')} resizeMode='stretch'
        >
        <Image source={require('../assets/entrada_sopaverduras.jpeg')} style={styles.imagen}/>
                
        <Text style={styles.titulos}>Sopa de Verduras</Text>
        <Text style={styles.contenido}>Caldillo de Jitomate con verduras</Text>
        <Text style={styles.contenido}>Precio: $40 MXN</Text>
        </ImageBackground>
        </View>
        )
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
        color: '#2d1705ff'

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
        color:'#fdfdfdff',
        fontSize:20,
    },
    imagen:{
        alignSelf:'center'
    },
})