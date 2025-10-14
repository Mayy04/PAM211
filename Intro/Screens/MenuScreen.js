import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import BotonesScreen from  './BotonesScreen';
import ContadorScreeen from './ContadorScreen';
import InputScreen from './InputScreen';
import ImageScreen from './ImageScreen';
import ScrollScreen from './ScrollScreen';
import ActivitiIndScreen from './ActivityIndScreen';
import FlatListScreen from './FlatListScreen';
import ModalScreen from './ModalScreen';


export default function MenuScreen() {
    const [screen,setScreen]=useState('menu');

    switch(screen){
        case 'contador':
            return <ContadorScreeen/>;
        case 'botones':
            return <BotonesScreen/>;
        case 'input':
            return <InputScreen/>;
        case 'image':
            return <ImageScreen/>;
        case 'scroll':
            return <ScrollScreen/>;
        case 'actInd':
            return <ActivitiIndScreen/>
        case 'flatList':
            return <FlatListScreen/>
        case 'modal':
            return <ModalScreen/>
        case 'menu':
            default: 
            return (
            <View style={styles.container}>
                <Text>Menú de Prácticas</Text>
                <View style={styles.botonesContainer}>
                <Button onPress={()=>setScreen('contador')} title='Práctica Contador'></Button>
                <Button onPress={()=>setScreen('botones')} title='Práctica Buttons & Switch'></Button>
                <Button onPress={()=>setScreen('input')} title='Práctica Text Input & Alert'></Button>
                <Button onPress={()=>setScreen('image')} title='Práctica ImageBakground & SlapshScreen'></Button>
                <Button onPress={()=>setScreen('scroll')} title='Práctica ScrollView'></Button>
                <Button onPress={()=>setScreen('actInd')} title='Práctica ActivityIndicator'></Button>
                <Button onPress={()=>setScreen('flatList')} title='Práctica FlatList & SectionList'></Button>
                <Button onPress={()=>setScreen('modal')} title='Práctica Modal'></Button>
                </View>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#a495a9ff',
    alignItems: 'center',//trabaja sobre eje x (start, center, end)
    justifyContent: 'center',//trabaja sobre eje y
  },
    botonesContainer:{
        marginTop: 30,
        //flexDirection: 'row',
        gap:14,
    },
})