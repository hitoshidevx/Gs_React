import React from 'react';

const usuario = sessionStorage.getItem("usuario-validado")

export default function Home() {


  return (
    <div>
        <div>
            <h1>Home</h1>
        </div>

        <div>
            <h3>Olá {usuario}! Escolha um tipo de cadastro:</h3>
        </div>
    </div>
  )
}