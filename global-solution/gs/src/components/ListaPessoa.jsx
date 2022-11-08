import React, { useEffect, useState } from 'react';
import { ButtonBackList, Card, DeleteButton, Divisor, EditButton, InputButtonDiv, InputList, PessoaFrame } from '../style/styled';
import Footer from './Footer';

export default function ListaPessoa() {


    const [pessoas, setPessoas] = useState([])
    const [pessoaFilter, setPessoaFilter] = useState([])

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

        <InputButtonDiv>
          <InputList type="text" placeholder="Pesquisar uma pessoa..." onChange={e => { setPessoaFilter(e.target.value) }} />
          <ButtonBackList to="/home">Voltar</ButtonBackList>
        </InputButtonDiv>

      <Divisor >
            {
              pessoas.filter((pessoa) => {
                if(pessoaFilter == "") {
                  return pessoa
                } else if (pessoa.nomePessoa.toLowerCase().includes(pessoaFilter.toLowerCase( ))) {
                  return pessoa
                }
              }).map((pessoa) => (
                <Card id="cardPessoa"  key={pessoa.codigo}>
                <h3>{pessoa.nomePessoa}</h3>
                <h3>{pessoa.sobreMim}</h3>
                <h3>{pessoa.rgPessoa}</h3>
                <div>
                  <EditButton to={`/editarpessoa/${pessoa.codigo}`}>Editar</EditButton>
                  <DeleteButton onClick={handleDelete.bind(this, pessoa.codigo)} >Excluir</DeleteButton>
                </div>
              </Card>
              ))
            }
        
      </Divisor>

      <Footer />
    </div>
  )
}