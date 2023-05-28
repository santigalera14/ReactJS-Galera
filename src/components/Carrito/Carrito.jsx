import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'

const Carrito = () => {

    const { carrito, vaciarCarrito, } = useContext(CartContext)

    const handleVaciar = () => {
        vaciarCarrito();
    }


    return (
        <div className='container'>
            <h1 className='main-title'> Carrito </h1>
            <div className='contenedor-carrito'>
                {
                    carrito.map((prod) => (
                        <div key={prod.id} className='carrito-producto'>
                            <br />
                            <img src={prod.imagen} alt={prod.titulo} className='carrito-producto-imagen' />
                            <h3 className='carrito-producto-titulo'>{prod.titulo}</h3>
                            <p>Precio unit: ${prod.precio}</p>
                            <p>Precio total: ${prod.precio * prod.cantidad}</p>
                            <p>Cant: {prod.cantidad}</p>
                            <br />
                        </div>
                    ))
                }
            </div>
            {
                carrito.length > 0 ?
                    <>
                        <div id="carrito-acciones" className="carrito-acciones disabled">
                            <div className="carrito-acciones-izquierda">
                                <button id="carrito-acciones-vaciar" className="carrito-acciones-vaciar" onClick={handleVaciar}>Vaciar carrito</button>
                            </div>
                            <div className="carrito-acciones-derecha">
                                <div className="carrito-acciones-total">
                                </div>
                                <Link to='/checkout'>
                                    <button id="carrito-acciones-comprar" className="carrito-acciones-comprar">Comprar</button>
                                </Link>
                            </div>
                        </div>
                    </> :
                    <h2>El carrito esta vacio :c</h2>
            }
        </div>
    )
}

export default Carrito
