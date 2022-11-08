import React, { useEffect, useState } from 'react';
import { ButtonBackList, Card, DeleteButton, Divisor, EditButton, InputButtonDiv, InputList, VeiculoFrame } from '../style/styled';
import Footer from './Footer';

export default function ListaVeiculo() {

  const [veiculos, setVeiculos] = useState([])
  const [veiculoFilter, setVeiculoFilter] = useState([])

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
      fetch(`https://gs-1tdsr.herokuapp.com/rest/veiculo/${id}`,{
          method:"delete"
      }).then(()=>{
          window.location = "/listaveiculo"
      }).catch((error)=>{
          console.log(error)
      })
  }

  return (
    <div>
      <VeiculoFrame >
          <h2 >Lista de Veículos</h2>
      </VeiculoFrame>

      <InputButtonDiv>
          <InputList type="text" placeholder="Pesquisar uma veículo..." onChange={e => { setVeiculoFilter(e.target.value) }} />
          <ButtonBackList to="/home">Voltar</ButtonBackList>
      </InputButtonDiv>
      

      <Divisor >
            {
              veiculos.filter((veiculo) => {
                if(veiculoFilter == "") {
                  return veiculo
                } else if (veiculo.nomeVeiculo.toLowerCase().includes(veiculoFilter.toLowerCase())) {
                  return veiculo
                }
                }).map((veiculo) =>
                    (
                      <Card id="cardPessoa" key={veiculo.codigo}>
                      <h3>{veiculo.nomeVeiculo}</h3>
                      <h3>{veiculo.sobreVeiculo}</h3>
                      <h3>{veiculo.placaVeiculo}</h3>
                      <div>
                        <EditButton to={`/editarveiculo/${veiculo.codigo}`} >Editar</EditButton>
                        <DeleteButton onClick={handleDelete.bind(this, veiculo.codigo)} >Excluir</DeleteButton>
                      </div>
                    </Card>
                ))}
        
      </Divisor>

      <Footer />
    </div>
  )
}