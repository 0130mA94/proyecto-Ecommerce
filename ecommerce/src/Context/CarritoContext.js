import { useState, createContext } from "react";

export const CarritoContext = createContext({carrito:[]});

export const CarritoProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);

    console.log(carrito);

    const agregarProducto = (item, cantidad) => {
        if (!productoAgregado(item.id)) {
            setCarrito(prev => [...prev, {item, cantidad}])
        }
        else {
            console.log("Producto ya agregado");
        }
    }

    const eliminarProducto = (id) => {
        const  carritoActualizado = carrito.filter( prod => prod.id !== id);
        setCarrito(carritoActualizado);
    }

    const vaciarCarrito = () => {
        setCarrito ([]);
    }

    const productoAgregado = (id) => {
        return carrito.some(prod => prod.id === id);
    }

    return ( 
        <CarritoContext.Provider value= {{carrito, agregarProducto, eliminarProducto, vaciarCarrito}}>
            {children}
        </CarritoContext.Provider>
    )

}