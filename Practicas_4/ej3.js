function simularPeticionAPI(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Datos recibidos correctamente");
        },500);
    });
}

async function obtenerDatos(){
    const mensaje = await simularPeticionAPI();
    console.log(mensaje);
}

obtenerDatos();


