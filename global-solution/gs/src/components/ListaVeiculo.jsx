import React, { useEffect, useState } from 'react';

export default function ListaVeiculo() {

  const listaVeiculoFrame = {
    margin: 0,
    padding: 40,
    fontSize: 50,
    color: 'white',
    fontFamily: 'Montserrat',
    backgroundColor: "#D96E6E"
  }

  const textoFrame = {
      marginTop : 100,
      marginLeft: 200,
      fontFamily: 'Montserrat'
  }

  const cardVeiculo = {
    padding: 30,
    width: 200,
    textAlign: 'center',
    fontFamily: 'Montserrat',
    backgroundColor: "#D9D9D9",
    color: "#6B6464",
    fontSize: 20,
    marginTop: 100,
  }

  const sepVeiculos = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }

  const deleteButton = {
    padding: 10,
    textDecoration: 'none',
    color: 'White',
    width: '50%',
    backgroundColor: '#D96E6E',
    fontFamily: 'Montserrat',
    fontSize: 20,
    textAlign: 'center',
    border: 'none',
    cursor: 'pointer'
  }

  const editButton = {
    padding: 10,
    textDecoration: 'none',
    color: 'White',
    width: '50%',
    backgroundColor: '#CFA464',
    fontFamily: 'Montserrat',
    fontSize: 20,
    textAlign: 'center',
    border: 'none',
    cursor: 'pointer'
  }

  const [veiculos, setVeiculos] = useState([])

    useEffect(()=>{
      fetch("http://localhost:8080/GsAPI/rest/veiculo").then((resp)=>{
          return resp.json();
      }).then((resp)=>{
          setVeiculos(resp)
          console.log(resp)
      }).catch((error)=>{
          console.log(error)
      })
  },[])

  const handleDelete = (id)=>{
      fetch(`http://localhost:8080/GsAPI/rest/veiculo/${id}`,{
          method:"delete"
      }).then(()=>{
          window.location = "/listaveiculo"
      }).catch((error)=>{
          console.log(error)
      })
  }

  return (
    <div>
      <div style={listaVeiculoFrame} >
            <h2 style={textoFrame} >Lista de Veículos</h2>
        </div>

      <div style={sepVeiculos}>
            {veiculos.map((veiculo) => (
              <div id="cardPessoa" style={cardVeiculo} key={veiculo.codigo}>
              <h3>{veiculo.nomeVeiculo}</h3>
              <h3>{veiculo.sobreVeiculo}</h3>
              <h3>{veiculo.placaVeiculo}</h3>
              <div>
                <button style={editButton}>Editar</button>
                <button onClick={handleDelete.bind(this, veiculo.codigo)} style={deleteButton}>Excluir</button>
              </div>
            </div>
            ))}
        
      </div>
    </div>
  )
}