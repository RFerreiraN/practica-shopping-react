
import { DetallesProductos } from './DetallesProductos';

export const ListaProductos = ( {arrayProductos, setEndPoint} ) => {

  return (
    <>
      {arrayProductos.map( producto => <li key={producto.id}>{producto.title} <DetallesProductos producto={ producto } setEndPoint={setEndPoint}/></li>)} 
    </>
  )
}
