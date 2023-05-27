import { Link } from 'react-router-dom'
import cart from '../assets/cart.svg'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

export const CartWidget = () => {

  const {cantidadEnCarrito} = useContext(CartContext)

  return (
    <div>
      <Link className="menu-link" to="/carrito">
          <img src={cart} alt="cart-widget"/> 
          <span className='numerito'> {cantidadEnCarrito()}</span>
      </Link>
    </div>
  )
}