import { useEffect,useState, useCallback, use } from "react";
import {View, Text, TextInput, TouchableOpacity, FlatList,
    StyleSheet, Alert, ActivityIndicator, Platform
} from 'react-native'
import { UsuarioController } from "../controllers/UsuarioController";

const controller = new UsuarioController()

export default function UsuarioView(){
        const [usuarios, setUsuarios]=useState([]);
        const [nombre, setNombre]=useState('');
        const [loading, setLoading]=useState(true);
        const [guardando, setGuardando] = useState(false);

        const cargarUsuarios = useCallback(async()=>{
            try{
                setLoading(true);
                const data = await controller.obtenerUsuarios();
                setUsuarios(data);
                console.log(`${data.length} usuarios cargados`);
            }catch (error){
                Alert.alert('Error', error.message);
            }finally{
                setLoading(false);
            }
        },[]);

        useEffect(()=>{
            const init = async()=>{
                await controller.initialize();
                await cargarUsuarios();
            };
            init();
            controller.addListener(cargarUsuarios);

            return ()=>{
                controller.removeListener(cargarUsuarios);
            };
        },[cargarUsuarios]);

        const handleAgregar =async()=>{
            if (guardando)return;
            try{
                setGuardando(true);
                const usuarioCreado = await controller.crearUsuario(nombre);
                Alert.alert('Usuario Creado', `"${usuarioCreado.nombre}" guardado con ID:
                    ${usuarioCreado.id}`);
                setNombre('');
            }catch(error){
                Alert.alert('Error', error.message);
            }
            finally{
                setGuardando(false);
            }
        };

        const renderUsuario = ({item, index})=>(
            <View style={styles.userItem}>
                <View style={styles.userNumber}>
                    <Text style={styles.userNumberText}>{index+1}</Text>
                </View>
                <View style={styles.userInfo}>
                    <Text style={styles.userName}>{item.nombre}</Text>
                    <Text style={styles.userId}>ID: {item.id}</Text>
                    <Text style={styles.userDate}>
                        {new Date(item.fechaCreacion).toLocaleDateString('es-MX',{
                            year:'numeric',
                            month:'long',
                            day:'numeric'
                        })}
                    </Text>
                </View>
            </View>
        );
        
        return(
            <View style={styles.container}>
                <Text style = {styles.title}>INSERT & SELECT</Text>
                <Text style = {styles.subtitle}>Android(SQLite)</Text>
                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>Insertar Usuario</Text>
                    <TextInput style={styles.input}
                    placeholder="Escribe el nombre del usuario"
                    value={nombre}
                    onChangeText={setNombre}/>
                    <TouchableOpacity style={styles.button}
                    onPress={handleAgregar}
                    disabled={guardando}>
                        <Text style={styles.textButton}>
                            {guardando ? "Guardando..." : "Agregar usuario"}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.card}>
                    <View style={styles.listHeader}>
                        <Text style={styles.sectionTitle}>Lista de usuarios</Text>
                        <TouchableOpacity onPress={cargarUsuarios}>
                            <Text style={styles.reload}>Regargar</Text>
                        </TouchableOpacity>
                    </View>
                    {loading ? (
                        <ActivityIndicator size="large" color="#007bff"/>
                    ) : (
                        <FlatList
                        data={usuarios}
                        keyExtractor={(item)=>item.id.toString()}
                        renderItem={renderUsuario}
                        />
                    )}
                </View>
            </View>
        )
    }

    const styles=StyleSheet.create({
        container:{
            flex:1,
            paddingHorizontal:20,
            paddinTop:20,
            backgroundColor:"#f5f7fa",
        },
        title:{
            fontSize:22,
            fontWeight:"bold",
            textAlign:"center",
            marginTop:10,
            color:"#000",
        },
        subtitle:{
            fontSize:14,
            textAlign:"center",
            color:"#777",
            marginBottom:20,
        },
        card:{
            backgroundColor:"#fff",
            padding:20,
            borderRadius:15,
            marginBottom:25,
        },
        sectionTitle:{
            fontSize:18,
            fontWeight: "bold",
            marginBottom:15,
            color:"#000",
        },
        input:{
            backgroundColor:"#f1f3f6",
            padding:12,
            borderRadius:10,
            fontSize:16,
            marginBottom:15,
        },
        button:{
            backgroundColor:"#007bff",
            paddingVertical:14,
            alignItems:"center",
            borderRadius:10,
        },
        textButton:{
            fontSize:16,
            color:"#fff",
            fontWeight:"bold",
        },
        listHeader:{
            flexDirection:"row",
            justifyContent:"space-between",
            marginBottom:15,
        },

        reload:{
            color:"#007bff",
            fontSize:16,
            fontWeight:"bold",
        },
        userItem:{
            flexDirection:"row",
            backgroundColor:"#fff",
            padding: 15,
            borderRadius:12,
            marginBottom:12,
            borderLeftWidth:3,
            borderLeftColor:"#007bff",
        },
        userNumberText:{
            color:"#007bff",
            fontSize:16,
            fontWeight:"bold",
        },
        userInfo:{
            flex:1,
        },
        userName:{
            fontSize:17,
            fontWeight:"bold",
            color:"#000",
        },
        userId:{
            fontSize:14,
            color:"#007bff",
            marginTop:2,
        },
        userDate:{
            fontSize:13,
            color:"#777",
            marginTop:2,
        }
    })
