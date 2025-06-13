
export const DetallesProductos = ( { setEndPoint , producto }) => {
  
  const detalles = () => {
    setEndPoint( `/${producto.id}` )
  }

  return (
    <>
      { <button onClick={ detalles }>Detalles</button> }
    </>
  )
}
