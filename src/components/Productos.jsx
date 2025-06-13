import { useEffect, useState } from "react";

export const Productos = () => {

  const [productos, setProductos] = useState([])

  const fetchProductos = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProductos(data);
      console.log(data)
    } catch (error) {
      
    }
  }

  useEffect(() => {
    fetchProductos()
  }, [])

  return (
    <>
      <h1>Productos</h1>
      <ul>
      { productos.map( producto => <li key={producto.id}>{ producto.title }</li>)}
      </ul>

      
    </>
  )
}
