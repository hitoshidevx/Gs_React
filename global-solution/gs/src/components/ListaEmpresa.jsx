import React, { useEffect, useState } from 'react';

export default function ListaEmpresa() {

  const listaEmpresaFrame = {
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

  const cardEmpresa = {
    padding: 30,
    width: 200,
    textAlign: 'center',
    fontFamily: 'Montserrat',
    backgroundColor: "#D9D9D9",
    color: "#6B6464",
    fontSize: 20,
    marginTop: 100,
  }

  const sepEmpresas = {
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

  const [empresas, setEmpresas] = useState([])

    useEffect(()=>{
      fetch("http://localhost:8080/GsAPI/rest/empresa").then((resp)=>{
          return resp.json();
      }).then((resp)=>{
          setEmpresas(resp)
          console.log(resp)
      }).catch((error)=>{
          console.log(error)
      })
  },[])

  const handleDelete = (id)=>{
      fetch(`http://localhost:8080/GsAPI/rest/empresa/${id}`,{
          method:"delete"
      }).then(()=>{
          window.location = "/listaempresa"
      }).catch((error)=>{
          console.log(error)
      })
  }
  return (
  <div>
      <div style={listaEmpresaFrame} >
            <h2 style={textoFrame} >Lista de Empresas</h2>
        </div>

      <div style={sepEmpresas}>
            {empresas.map((empresa) => (
              <div id="cardPessoa" style={cardEmpresa} key={empresa.codigo}>
              <h3>{empresa.nomeEmpresa}</h3>
              <h3>{empresa.sobreEmpresa}</h3>
              <h3>{empresa.cnpjEmpresa}</h3>
              <div>
                <button style={editButton}>Editar</button>
                <button onClick={handleDelete.bind(this, empresa.codigo)} style={deleteButton}>Excluir</button>
              </div>
            </div>
            ))}
        
      </div>
    </div>
  )
}