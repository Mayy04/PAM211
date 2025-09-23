const personas =[
    {nombre:"Ana", edad:22},
    {nombre:"Luis", edad:35},
    {nombre:"María", edad:28}
]
console.log("");
console.log("Búsqueda de persona con el nombre Luis");
const nom = personas.find(nomb => nomb.nombre === "Luis").nombre;
/*constante nom = acceder a personas.find(vari nom asigna nueva var accediendo al nombre
y lo compara para que sea identico a luis. accediendo al nombre*/
console.log(nom);

console.log("");
console.log("Imprime el nombre y la edad de cada persona");
personas.forEach(personas => { console.log(personas)});
/* accede a personas por forecah(var personas asigna nueva var(imprime personas))*/

console.log("");
console.log("Suma de las 3 edades");
const sumaedades = personas.reduce((result, personas) => result + personas.edad, 0);
/*constante sumaedades = acceder a personas.reduce(nueva var resultado, var personas) asigna a resultado
+ acceder a personas edad*/
console.log(sumaedades);
