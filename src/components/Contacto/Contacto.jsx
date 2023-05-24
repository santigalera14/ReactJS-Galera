import React, { useState } from 'react'

const Contacto = () => {

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviado", {nombre, email});
  }

  const handleNombre = (e) => {
    setNombre(e.target.value);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
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

export default Contacto