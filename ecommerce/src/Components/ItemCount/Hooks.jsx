import { useContador } from "./ItemCount"
import "./ItemCount.css"
const Hooks = () => {
    const {contador, incrementar, disminuir} = useContador(1, 10)
    return (
        <div>
            <h2>Contador</h2>
            <button onClick={disminuir}>-</button>
            <strong> {contador} </strong>
            <button onClick={incrementar}>+</button>
        </div>
    )
}

export default Hooks