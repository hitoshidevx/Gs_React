import React, { useEffect, useState } from 'react';
import { Card, DeleteButton, Divisor, EditButton, PessoaFrame } from '../style/styled';

export default function ListaPessoa() {


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
      <PessoaFrame  >
            <h2>Lista de Pessoas</h2>
        </PessoaFrame>

      <Divisor >
            {pessoas.map((pessoa) => (
              <Card id="cardPessoa"  key={pessoa.codigo}>
              <h3>{pessoa.nomePessoa}</h3>
              <h3>{pessoa.sobreMim}</h3>
              <h3>{pessoa.rgPessoa}</h3>
              <div>
                <EditButton>Editar</EditButton>
                <DeleteButton onClick={handleDelete.bind(this, pessoa.codigo)} >Excluir</DeleteButton>
              </div>
            </Card>
            ))}
        
      </Divisor>
    </div>
  )
}