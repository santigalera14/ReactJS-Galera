import React, { useState } from 'react'

const CheckoutForm = ({onConfirm}) => {

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
        nombre, email, phone
    }
    onConfirm(userData)
  }

  return (

    <div className='container'>
      <h1 className='main-title'>Contacto</h1>
      <form className='formulario' onSubmit={handleSubmit}>
        
        <input 
          type='text' 
          placeholder='Ingrese su nombre'
          value={nombre}
          onChange={handleNombre}
        />

        <input 
          type='email'  
          placeholder='Ingrese su E-mail' 
          value={email}
          onChange={handleEmail}
        />
        <button className='enviar' type='submit'>Enviar</button>
      </form>

    </div>
    
  )
}

export default CheckoutForm