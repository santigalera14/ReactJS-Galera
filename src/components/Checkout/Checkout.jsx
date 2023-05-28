import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'

const Checkout = () => {

  const { vaciarCarrito } = useContext(CartContext)

  const handleCompra = () => {
    vaciarCarrito();
  }

  return (
    <div className='form-checkout'>
      <h2 className='checkout'>Orden de Compra</h2>
      <div>
        <form className='form' action="">
          <label htmlFor="">Nombre*</label>
          <input type="text" />
          <label htmlFor="">Apellido*</label>
          <input type="text" />
          <label htmlFor="">Telefono*</label>
          <input type="text" />
          <label htmlFor="">Email*</label>
          <input type="text" />
          <label htmlFor="">Confirmar Email*</label>
          <input type="text" />
          <p>(*campo obligatorio)</p>
          <div>
            {
              <Link to='/greating'>
                <button type='submit' className='form-button' onClick={handleCompra}> Crear Orden </button>
              </Link>
            }
          </div>
        </form>
      </div>
    </div>
  )
}

export default Checkout