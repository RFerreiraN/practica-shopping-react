import { useEffect, useState } from "react";

export const Productos = () => {

  const [productos, setProductos] = useState({})
  const [productoID, setProductoID] = useState(1)

  const fetchProductos = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productoID}`);
      const data = await response.json();
      setProductos(data);
      console.log(data)
    } catch (error) {
      console.error( error )
    }
  }

  useEffect(() => {
    fetchProductos()
  } , [ productoID ])

  const previusProduct = () => {
    setProductoID( productoID - 1)
  }

  const nextProduct = () => {
    setProductoID( productoID + 1)
  }

 
  return (
    <>
      <h1>Productos</h1>
      <ul>
      { <li>{ productos.title } </li> }
      { <li>{ productos.price } </li> }
      { <li>{ productos.description } </li> }
      { <img src={productos.image} width={'100px'}/>}
      </ul>
      <button onClick={ previusProduct }>Anterior</button>
      <button onClick={ nextProduct }>Siguiente</button>

      
    </>
  )
}
