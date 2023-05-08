import { useState } from "react";
import "./ItemCount.css"


const ItemCount = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const disminuir = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <>
            <div>
                <button onClick={disminuir}>-</button>
                <p>{contador}</p>
                <button onClick={incrementar}>+</button>
            </div>
            <button onClick={() => funcionAgregar(contador)}>Agregar al carrito</button>

        </>
    )
}

export default ItemCount



