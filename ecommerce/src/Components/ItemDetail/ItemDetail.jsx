import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { useState } from "react"
import { CarritoContext } from "../../Context/CarritoContext"
import { useContext } from "react"


const ItemDetail = ({id, nombre, precio, img, stock}) => {
const [agregarCantidad, setAgregarCantidad] = useState(0);


const { agregarProducto} = useContext(CarritoContext);


const handlerCantidad = (cantidad) => {
  setAgregarCantidad(cantidad);

  const item = {id, nombre, precio};
  agregarProducto(item, cantidad);
}


  
  return (
    <div className="contenedorItem">
        <h2>{nombre}</h2>
        <h3>Precio:  € {precio}</h3>
        <img src={img} alt={nombre} />
        {agregarCantidad > 0 ? (<Link to="/cart"> Terminar compra</Link >): (<ItemCount inicial={1} stock={stock
        } funcionAgregar={handlerCantidad}/>)
        }
    </div>
  )
}

export default ItemDetail
