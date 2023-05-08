// const products = [
//     {nombre: "Batman: Arkham Asylum", precio: 20, id:"1", stock: 40, img:"../imgProductos/BatmanArkham.jpg",idCat:"1"},
//     {nombre: "Batman: Año Uno", precio: 9.99, id:"2",stock: 25 , img:"../imgProductos/BatmanAñoUno.jpg", idCat: "1"},
//     {nombre: "Batman: La Corte de los Búhos", precio:25, id:"3", stock: 40, img:"../imgProductos/LaCorteDeLosBuhos.webp", idCat: "1"},
//     {nombre: "Avengers: Civil War", precio: 42, id:"4", stock: 20, img:"../imgProductos/MarvelCivilWar.jpg", idCat:"2"},
//     {nombre: "Avengers: Civil War 2", precio: 39.90, id:"5", stock: 35 , img:"../imgProductos/CivilWarII.jpg",idCat: "2"},
//     {nombre: "Spider-Man:La última caería de Kraven", precio:25.90, id:"6", stock: 25 , img:"../imgProductos/SpiderManKraven.jpg", idCat: "2"},
//     {nombre: "Flash: Flashpoint", precio:35, id:"7", stock: 40, img:"../imgProductos/Flashpoint.jpg", idCat: "1"},
//     {nombre: "Capitan América: La muerte del Capitán América", precio:25, id:"8", stock: 10, img:"../imgProductos/LaMuerteDelCap.jpg", idCat:"2"}
    
    
    
// ]

// export const getProducts = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve (products);
//         }, 200)
//     })
// }

// export const getUnProducto = (id) =>{
//         return new Promise((resolve) => {
//             setTimeout(() =>{
//                 const producto = products.find(prod => prod.id === id);
//                 resolve(producto);
//             }, 200)
//         })
// }

// export const  getProdcutosPorCategoria = (idCategoria) =>{
//     return new Promise (resolve => {
//         setTimeout(() => {const getProdcutosCategoria = products.filter(prod => prod.idCat === idCategoria)
//             resolve(getProdcutosCategoria);
//         }, 100)
//     })
// }