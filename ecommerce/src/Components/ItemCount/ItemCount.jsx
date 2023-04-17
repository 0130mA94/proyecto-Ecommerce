import { useState, useEffect } from "react";
import "./ItemCount.css"


export const useContador = (valorInicial, valorMaximo) => {
    const [contador, setContador] = useState(valorInicial);

    const incrementar = () => {
        if (contador < valorMaximo) {
            setContador(contador + 1);
        }
    }

    const disminuir = () => {
        if (contador > valorInicial) {
            setContador(contador - 1);
        }
    }

    return {contador, incrementar, disminuir }
}



