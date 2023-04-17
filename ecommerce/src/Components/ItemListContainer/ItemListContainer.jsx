import {useState, useEffect}from 'react'
import "./ItemListContainer.css"
import { getProducts, getProdcutosPorCategoria } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);

  const {idCategoria} = useParams();

  useEffect(() => {

    const funcionProductos = idCategoria ? getProdcutosPorCategoria : getProducts;

    funcionProductos(idCategoria)
    .then(response => setProducts(response))
    .catch(error => console.error(error))

  },[idCategoria])


  return (
    <><h2 className='sub'>{props.greeting}</h2>
    <ItemList products={products} />
    </>
  )
}

export default ItemListContainer