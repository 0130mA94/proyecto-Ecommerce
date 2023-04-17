import "./ItemDetail.css"

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className="contenedorItem">
        <h2>{nombre}</h2>
        <h3>Precio:  € {precio}</h3>
        <img src={img} alt={nombre} />

    </div>
  )
}

export default ItemDetail