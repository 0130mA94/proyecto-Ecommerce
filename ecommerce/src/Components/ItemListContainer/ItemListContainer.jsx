import { useState, useEffect } from 'react'
import "./ItemListContainer.css"
//import { getProducts, getProdcutosPorCategoria } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from "../../service/firebase/config";

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {
    const misProductos = idCategoria ? query(collection(db, "productos"), where("idCat", "==", idCategoria)) : collection(db, "productos");
    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setProductos(nuevosProductos);
      })
      .catch(error => console.log(error))
  }, [])




  /* useEffect(() => {
 
     const funcionProductos = idCategoria ? getProdcutosPorCategoria : getProducts;
 
     funcionProductos(idCategoria)
     .then(response => setProducts(response))
     .catch(error => console.error(error))
 
   },[idCategoria])*/


  return (
    <><h2 className='sub'>{props.greeting}</h2>
      <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer