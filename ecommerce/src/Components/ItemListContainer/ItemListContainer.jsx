import { useState, useEffect } from 'react'
import "./ItemListContainer.css"
//import { getProducts, getProdcutosPorCategoria } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from "../../service/firebase/config";

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);

  const { idCategory } = useParams();

  useEffect(() => {



    const getData = async () => {

      const queryRef = !idCategory

        ? collection(db, "productos")

        : query(
          collection(db, "productos"),
          where("type", "==", idCategory)
        );

      const response = await getDocs(queryRef);

      const productos = response.docs.map((doc) => {
        const newProduct = {
          ...doc.data(),
          id: doc.id,
        };

        return newProduct;
      });
      setTimeout(() => {

        setProducts(productos);

      }, 1000)
    };

    getData();



    const misProductos = idCategory ? query(collection(db, "productos"), where("idCat", "==", idCategory)) : collection(db, "productos");
    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setProductos(nuevosProductos);
      })
      .catch(error => console.log(error))
  }, [idCategory])




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