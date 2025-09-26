function verificarUsuario(usuario){
    return new Promise((resolve, reject) => {
        if (usuario === "admin") {
            resolve("Acceso concedido");
        } else {
            reject("Acceso denegado");
        }
    });
}
const usuario="admin"; //almacena el nombre el usuario patra poder verificarlo
verificarUsuario(usuario)
.then(res => console.log(res))//acceso concedido
.catch(err => console.error(err));
