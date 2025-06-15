import {useEffect, useState} from 'react';
import {  ListaProductos } from './ListaProductos';

export const Productos = () => {

  const [productos, setProductos] = useState([]);
  const [endPoint, setEndPoint] = useState('/')
 
  const fetchProductos = async() => {
      const response = await fetch(`https://fakestoreapi.com/products${endPoint}`);
      const data = await response.json();
      const productosArray = Array.isArray(data) ? data : [data];
      setProductos(productosArray);
      console.log(productosArray[0])
  }

  useEffect(() => {
    fetchProductos()
  }, [endPoint])

  return (
    <>
      <h1>Listado de Productos:</h1>
      <ul> 
        <ListaProductos arrayProductos={ productos } setEndPoint= { setEndPoint }/>
      </ul>
    </>
  )
}
