const persona = {
    nombre: "Iván Isay",
    edad: 37,
    direccion:{
        ciudad:"Qro",
        pais: "MX"
    }
};

console.log("");
console.log("Extracción e impresión de datos del objeto persona");
const {nombre, edad, direccion} = persona;//crea variables con los mismos nombres valores que tiene el objeto persona (?)
console.log("Me llamo " + nombre + ", tengo " + edad + ", vivo en " + direccion.ciudad);
//imprime [texto], nombre, [texto], edad, [texto] direccion accede a ciudad, solo imprime la ciudad 