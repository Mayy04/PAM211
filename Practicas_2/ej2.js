const productos = [
    {nombre:"Laptop", precio:12000},
    {nombre:"Mouse", precio:250},
    {nombre:"Teclado", precio:750},
    {nombre:"Monitor", precio:3000}
]
console.log("");
console.log("Nombres de productos con costo mayor a 1000")
const prod = productos.filter(producto => producto.precio > 1000).map(producto => producto.nombre);
//nueva constante = arreglo.filter(nueva constante asigna valor), si >1000, lo agrega en el otro arreglo (map))
console.log(prod);
//imprimir prod (arreglo nuevo)