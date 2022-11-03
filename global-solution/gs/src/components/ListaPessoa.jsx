import React, { useEffect, useState } from 'react';

export default function ListaPessoa() {
  
  const listaPessoaFrame = {
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

    const cardPessoa = {
      padding: 30,
      width: 200,
      textAlign: 'center',
      fontFamily: 'Montserrat',
      backgroundColor: "#D9D9D9",
      color: "#6B6464",
      fontSize: 20,
      marginTop: 100,
    }

    const sepPessoas = {
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

    const [pessoas, setPessoas] = useState([])

    useEffect(()=>{
      fetch("http://localhost:8080/GsAPI/rest/pessoa").then((resp)=>{
          return resp.json();
      }).then((resp)=>{
          setPessoas(resp)
          console.log(resp)
      }).catch((error)=>{
          console.log(error)
      })
  },[])

  const handleDelete = (id)=>{
      fetch(`http://localhost:8080/GsAPI/rest/pessoa/${id}`,{
          method:"delete"
      }).then(()=>{
          window.location = "/listapessoa"
      }).catch((error)=>{
          console.log(error)
      })
  }

  return (
    <div>
      <div style={listaPessoaFrame} >
            <h2 style={textoFrame} >Lista de Pessoas</h2>
        </div>

      <div style={sepPessoas}>
            {pessoas.map((pessoa) => (
              <div id="cardPessoa" style={cardPessoa} key={pessoa.codigo}>
              <h3>{pessoa.nomePessoa}</h3>
              <h3>{pessoa.sobreMim}</h3>
              <h3>{pessoa.rgPessoa}</h3>
              <div>
                <button style={editButton}>Editar</button>
                <button onClick={handleDelete.bind(this, pessoa.codigo)} style={deleteButton}>Excluir</button>
              </div>
            </div>
            ))}
        
      </div>
    </div>
  )
}