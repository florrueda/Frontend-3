import React from 'react'

export const Card = ({user}) => {
  return (
    <div>
        <h2>Hola {user.email}</h2>
        <h2>Tu password es: {user.password}</h2>
        <h2>Tu rol es {user.rol}</h2>
    </div>
  )
}
